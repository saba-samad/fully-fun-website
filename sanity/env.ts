"use client";


export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-17'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  'Missing environment variable: SANITY_API_TOKEN',
"skys7AdMLvf6bdicsLoprC74imC7WMh6Vqr47AjQbApCkQdOkx2pa40BIrWO7VYi5WPMk40yos2KQ54P1dQjIGgWZjRT5xgwKNTLjKH19SgXxhDb6gB3NE7WVnr2QlIm8VhGF25otuCaBICRcqjvuawVMNV4wtJGQ1eRMR3a3nrmBcyh37CC"

)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

return v
}
