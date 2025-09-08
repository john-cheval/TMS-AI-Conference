import React, { InputHTMLAttributes, useState, useEffect } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  ValidationRule,
  Path,
  UseFormSetValue,
  PathValue, // Import PathValue
} from "react-hook-form";
import { IoMdArrowDropdown } from "react-icons/io";

// Define the shape of a country object
interface CountryType {
  name: {
    common: string;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  dialCode: string;
}

interface NumbertElementProps<TFieldValues extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  rules?: ValidationRule<any>;
  setValue: UseFormSetValue<TFieldValues>;
  isBlue?: boolean;
}

const formatDialCode = (idd: CountryType["idd"]): string => {
  if (!idd || !idd.root) return "";
  const suffix = idd.suffixes && idd.suffixes.length > 0 ? idd.suffixes[0] : "";
  return `${idd.root}${suffix}`;
};

const NumberElement = <TFieldValues extends FieldValues>({
  label,
  name,
  register,
  errors,
  rules = {},
  isBlue = false,
  setValue,
  ...rest
}: NumbertElementProps<TFieldValues>) => {
  const errorMessage = errors[name]?.message;

  const [isOpen, setIsOpen] = useState(false);
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryType | null>(
    null
  );

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,idd"
        );
        const data = await response.json();

        if (!Array.isArray(data)) {
          console.error("API response is not an array");
          return;
        }

        const formattedCountries: CountryType[] = data
          .filter((country: any) => country.idd && country.idd.root)
          .map((country: any) => ({
            name: country.name,
            idd: country.idd,
            dialCode: formatDialCode(country.idd),
          }))
          .sort((a, b) => a.name.common.localeCompare(b.name.common));

        const uae = formattedCountries.find(
          (country) => country.name.common === "United Arab Emirates"
        );

        if (uae) {
          const otherCountries = formattedCountries.filter(
            (country) => country.name.common !== "United Arab Emirates"
          );
          setCountries([uae, ...otherCountries]);
          setSelectedCountry(uae);
          setValue(
            name,
            uae.dialCode as PathValue<TFieldValues, Path<TFieldValues>>
          );
        } else {
          setCountries(formattedCountries);

          if (formattedCountries.length > 0) {
            setSelectedCountry(formattedCountries[0]);
            setValue(
              name,
              formattedCountries[0].dialCode as PathValue<
                TFieldValues,
                Path<TFieldValues>
              >
            );
          }
        }
      } catch (error) {
        console.error("Failed to fetch country data:", error);
      }
    };
    fetchCountries();
  }, [setValue, name]);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCountrySelect = (country: CountryType) => {
    setSelectedCountry(country);
    setIsOpen(false);

    setValue(
      name,
      country.dialCode as PathValue<TFieldValues, Path<TFieldValues>>
    );
  };

  return (
    <div className="flex flex-col gap-y-2 flex-grow">
      <div className="flex items-center relative">
        <div
          id="dropdown-phone"
          className={`absolute left-0 top-full mt-2 w-52 overflow-y-scroll   max-h-52 bg-tms-blue rounded-md border border-light-grey  shadow-sm z-50 no-scrollbar ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul
            className="py-2  text-white text-sm md:text-base  "
            aria-labelledby="dropdown-phone-button"
          >
            {countries.map((country, index) => (
              <li key={index}>
                <button
                  type="button"
                  className={`inline-flex w-full px-4 py-2 ${
                    isBlue ? "text-dark-alter" : "text-white"
                  }     hover:bg-tms-blue/[.2] dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white text-sm md:text-base`}
                  role="menuitem"
                  onClick={() => handleCountrySelect(country)}
                >
                  <div className="inline-flex items-center text-left ">
                    {country.name.common} ({country.dialCode})
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative w-full overflow-hidden">
          <button
            id="dropdown-phone-button"
            data-dropdown-toggle="dropdown-phone"
            className={`z-10 inline-flex items-center h-full py-2.5 px-4 font-normal text-center bg-transparent text-sm md:text-base gap-x-1.5 ${
              isBlue ? "text-dark-alter" : "text-white"
            }  outline-none absolute left-0 top-0`}
            type="button"
            onClick={handleButtonClick}
          >
            {selectedCountry?.dialCode} <IoMdArrowDropdown size={18} />
          </button>

          <input
            className={`${
              isBlue ? "input-alter" : "input"
            }  fix-autofill no-arrow-number !pl-[90px] w-full`}
            id={name}
            type="tel"
            {...register(name, rules)}
            {...rest}
          />
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage as string}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NumberElement;
