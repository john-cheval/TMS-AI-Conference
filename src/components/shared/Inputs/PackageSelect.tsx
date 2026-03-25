// PackageSelect.tsx
"use client";
import React, { forwardRef, useEffect, useState } from "react";
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
  packageOption?:any[];
  selectedvalue?:string;
}

import { GroupBase } from "react-select";

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
    </div>
  );
};

const getNestedError = <TFieldValues extends FieldValues>(
  errors: FieldErrors<TFieldValues>,
  name: Path<TFieldValues>
) => {
  const parts = name.split(".");
  let currentError: any = errors;
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
// Use React.forwardRef to pass the ref down
const PackageSelect = forwardRef(
  <TFieldValues extends FieldValues>(
    { name, onChange, onBlur, value, errors,packageOption,selectedvalue='' }: TitleSelectProps<TFieldValues>,
    ref: React.ForwardedRef<any> // The ref is passed as the second argument
  ) => {
    const [windowWidth, setWindowWidth] = useState(
      typeof window !== "undefined" ? window.innerWidth : 0
    );

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

    const options = [
      { value: "Mr", label: "Mr" },
      { value: "Mrs", label: "Mrs" },
      { value: "Ms", label: "Ms" },
      { value: "Dr", label: "Dr" },
      { value: "Capt.", label: "Capt." },
      { value: "Prof.", label: "Prof." },
      { value: "Maj.", label: "Maj." },
      { value: "Cmdr.", label: "Cmdr." },
      { value: "Gen.", label: "Gen." },
      { value: "Eng.", label: "Eng." },
      { value: "Hon.", label: "Hon." },
      { value: "H.E", label: "H.E" },
    ];

    const customStyles = {
      control: (styles: any) => ({
        ...styles,
        borderColor: "#0078bb",
        borderRadius: "8px",
        backgroundColor: "transparent",
        paddingBlock: "8px",
        paddingLeft: getPaddingLeft(),
        color: "#00081b",
        fontSize:"16px",
        "&:hover": {
          borderColor: "#0078bb",
        },
      }),
      menu: (styles: any) => ({
        ...styles,
        marginTop: "10px",
        borderRadius: "8px",
        backgroundColor: "#0078bb",
      }),
      option: (
        styles: any,
        { isFocused, isSelected }: { isFocused: boolean; isSelected: boolean }
      ) => ({
        ...styles,
        backgroundColor: isFocused ? "#0078ee" : isSelected ? "#4d1592" : "",
        color: "#00081b",
        borderRadius: "4px",
        "&:hover": {
          borderColor: "#fff",
        },
      }),
      placeholder: (styles: any) => ({
        ...styles,
        color: "#00081b",
      }),
      singleValue: (styles: any) => ({
        ...styles,
        color: "#00081b",
      }),
    };
    // const errorMessage = getNestedError(errors, name);
    const errorMessage = getNestedError<TFieldValues>(errors, name);

    useEffect(() => {
  if (packageOption?.length && selectedvalue && !value) {
    const matched = packageOption.find(
      (opt) => String(opt.value) === String(selectedvalue)
    );

    if (matched) {
      onChange(matched.value, null as any);
    }
  }
}, [packageOption, selectedvalue]);

    const selectedOption = packageOption &&  packageOption.find(
        (option) => option.value === (value || selectedvalue)
    ) || null;


    console.log("selectedOption",selectedOption,selectedvalue,packageOption)

    return (
      <div>
        <Select
          ref={ref as any} // Pass the ref down to the Select component
          options={packageOption}
          onChange={(newValue, actionMeta) => {
            const valueStr =
              newValue && typeof newValue === "object" && "value" in newValue
                ? (newValue as { value: string }).value
                : "";
            onChange(valueStr, actionMeta);
          }}
          onBlur={onBlur}
        //   value={options.find((option) => option.value === value) || null}
            value={selectedOption}
          styles={customStyles}
          placeholder="Select Package"
          components={{ DropdownIndicator: DropdownIndicator }}
          autoFocus={false}
        />
        {/* {selectedOption === null && (
          <p className="text-red-500 text-sm mt-1">
            Please Select Package
          </p>
        )} */}
        {errors["package"]?.message && selectedOption === null && (
          <p className="text-red-500 text-sm mt-1">
            {errors["package"]?.message as string}
          </p>
        )}
        {/* {errorMessage && (
          <p className="text-red-500 text-sm mt-1">{errorMessage as string}</p>
        )} */}
      </div>
    );
  }
);

PackageSelect.displayName = "PackageSelect";

export default PackageSelect;
