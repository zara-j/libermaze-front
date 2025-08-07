import { Book } from "../types/book";

export interface SearchSuggestionsProps {
  suggestions: Book[];
  onSuggestionClick: () => void;
  searchQuery: string;
}