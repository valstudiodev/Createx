import {
  ChangeEvent,
  useEffect,
  useId,
  useState,
} from "react";
import { SearchProps } from "../model/types";
import './search.scss';

export default function Search({
  value = '',
  placeholder = 'Search...',
  debounceTime = 300,
  disabled = false,
  label = '',
  className = '',
  onChange,
  onClear,
  ...props
}: SearchProps): React.JSX.Element {

  const search = 'search'

  const combinedClasses = [
    search,
    className
  ].filter(Boolean).join(' ')

  const [searchTerm, setSearchTerm] = useState<string>(value);
  const inputId = useId()

  useEffect(() => {
    setSearchTerm(value)
  }, [value]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (searchTerm !== value) {
        onChange(searchTerm)
      }
    }, debounceTime);

    return () => window.clearTimeout(timer)
  }, [searchTerm, debounceTime, onChange, value]);

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(e.target.value)
  }

  function handleClear(): void {
    setSearchTerm('')
    onClear?.()
  }

  return (
    <div className={`${combinedClasses} ${disabled ? 'search--disabled' : ''}`}>

      <form
        role="search"
        className={`${search}__form`}
        onSubmit={(e) => e.preventDefault()}
      >
        {label && (
          <label
            htmlFor={inputId}
            className={`${search}__label`}
          >
            {label}
          </label>
        )}

        <input
          {...props}
          id={inputId}
          type="search"
          className={`${search}__input`}
          value={searchTerm}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
        />

        <span
          className={`${search}__icon ${search}__icon--icon-search`}
          aria-hidden="true"
        >
        </span>

        {searchTerm && !disabled && (
          <button
            type="button"
            className={`${search}__btn-clear`}
            aria-label="Clear search"
            onClick={handleClear}>
            &times;
          </button>
        )}
      </form>
    </div>
  )
}