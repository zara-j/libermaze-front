import { Book } from "./book.model";

export interface SearchSuggestionsProps {
  suggestions: Book[];
  onSuggestionClick: () => void;
  searchQuery: string;
}