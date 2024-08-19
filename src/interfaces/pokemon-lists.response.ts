// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);

export interface PokemonListResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toWelcome(json: string): PokemonListResponse {
        return JSON.parse(json);
    }

    public static welcomeToJson(value: PokemonListResponse): string {
        return JSON.stringify(value);
    }
}
