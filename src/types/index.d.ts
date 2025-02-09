import { AxiosResponse } from 'axios';
//-----------------------------------------------------------------------------
// GENERAL TYPES
//-----------------------------------------------------------------------------
export interface IImage {
  publicId: string;
  width: number;
  height: number;
  format: string;
  type: string;
  url: string;
}

export interface IValidationErrors {
  [key?: string]: {
    message: string;
    value: unknown;
    children?: {
      index: string;
      errors: {
        message: string;
        value: unknown;
      };
    };
  };
}

export interface IValidationErrorResponse {
  ok: boolean;
  message: string;
  validationErrors: IValidationErrors;
}

export type ErrorResponse = Pick<AxiosResponse, 'data' | 'status'>;

export * from 'src/features/Auth/types';
export * from 'src/features/CategoryPage/types';
export * from 'src/features/BoxPage/types';
export * from 'src/features/InvoicePage/types';
