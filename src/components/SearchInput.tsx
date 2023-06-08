'use client';

import qs from "query-string";
import { useEffect, useState } from "react";
import Input from "./Input";
import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";

interface SearchInputProps {
  // children: React.ReactNode;
}

const SearchInput: React.FC<SearchInputProps> = ({}) => {
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);
  const router = useRouter();

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query,
    });

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <Input
      placeholder="What do you want to listen to?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
