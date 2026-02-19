"use client";
import React, { useEffect, useState } from "react";
import Select, {
  ActionMeta,
  DropdownIndicatorProps,
  SingleValue,
} from "react-select";
import { FieldValues, FieldErrors, Path } from "react-hook-form";
import { MdOutlineArrowDropDown } from "react-icons/md";

// Define the types for the props
interface TitleSelectProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  onChange: (
    newValue: SingleValue<string>,
    actionMeta: ActionMeta<any>
  ) => void;
  onBlur: (e: React.FocusEvent) => void;
  value: any;
  
}

import { GroupBase } from "react-select";
import { baseUrl } from "@/lib/api";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { toast } from "sonner";

const DropdownIndicator = (
  props: DropdownIndicatorProps<
    { value: string; label: string },
    false,
    GroupBase<{ value: string; label: string }>
  >
) => {
  return (
    <div
      {...props.innerProps}
      style={{ padding: "8px" }}
      className="cursor-pointer"
    >
      <MdOutlineArrowDropDown className="text-2xl text-white mr-3" />
      {/* <FontAwesomeIcon icon={faCaretDown} className="text-[#22334F] mr-3" /> */}
    </div>
  );
};

const getNestedError = (errors: any, name: any) => {
  const parts = name.split(".");
  let currentError = errors;

  for (const part of parts) {
    if (
      currentError &&
      typeof currentError === "object" &&
      part in currentError
    ) {
      currentError = currentError[part];
    } else {
      return undefined;
    }
  }

  return currentError?.message;
};

const CountryName = <TFieldValues extends FieldValues>({
  name,
  onChange,
  onBlur,
  value,
  errors,
}: TitleSelectProps<TFieldValues>) => {
    console.log("errors",errors)
    console.log("errors name",errors[name]?.message)
    const errorMessage = getNestedError(errors, name);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetcCountries = async () => {
      try {
        const response = await fetch(
        //   `${baseUrl}/getmasterdetails?master_name=countries`
          `${baseUrl}/getmasterdetails?master_name=countries`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data && data?.data) {
          setCountryList(data?.data);
        }
      } catch (error) {
        toast.error("Could not fetch the countries data:");
      }
    };
    fetcCountries();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getPaddingLeft = () => {
    if (windowWidth >= 1025) {
      return "15px";
    } else if (windowWidth >= 769) {
      return "15px";
    } else {
      return "12px";
    }
  };

  const customStyles = {
    control: (styles: any) => ({
      ...styles,
    //   borderColor: isDark ? "#fff" : "#1C75BC",
      borderColor: "#fff",
    //   borderRadius: "8px",
      backgroundColor: "transparent",
      paddingBlock: "8px",
      paddingLeft: getPaddingLeft(),
      color: "#fff",
      "&:hover": {
        borderColor: "#fff",
      },
    }),
    menu: (styles: any) => ({
      ...styles,
      marginTop: "10px",
    //   borderRadius: "8px",
      backgroundColor: "#edf9ff",
      zIndex: 999999999999999999,
      scrollBarWidth: "none",
      msOverflowStyle: "none",
    }),
    option: (
      styles: any,
      { isFocused, isSelected }: { isFocused: boolean; isSelected: boolean }
    ) => ({
      ...styles,
      backgroundColor: isFocused ? "#0078ee" : isSelected ? "#4d1592" : "",
      color: isFocused ? "#00081b" : isSelected ? "#fff" : "",
    //   borderRadius: "4px",
      "&:hover": {
        borderColor: "#fff",
      },
    }),
    placeholder: (styles: any) => ({
      ...styles,
      color: "#fff",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: "#fff",
    }),
  };

  const options = countryList.map((country: any) => ({
    value: country.countryCode,
    label: country.countryName,
  }));

  return (
    <div>
      <Select
        options={options}
        onChange={(newValue, actionMeta) => {
          const valueStr =
            newValue && typeof newValue === "object" && "value" in newValue
              ? (newValue as { value: string }).value
              : "";
          onChange(valueStr, actionMeta);
        }}
        onBlur={onBlur}
        value={options.find((option) => option.value === value) || null}
        styles={customStyles}
        placeholder="Country"
        // CORRECTED: Pass an object with the component
        components={{ DropdownIndicator: DropdownIndicator }}
        autoFocus={false}
      />
      {/* {errors[name]?.message && (
        <p className="text-red-500 text-sm mt-1">
          {errors[name]?.message as string}
        </p>
      )} */}
      {errorMessage && (
        <p className="text-red-500 error text-sm mt-1">
          {errorMessage as string}
        </p>
      )}
    </div>
  );
};

export default CountryName;
