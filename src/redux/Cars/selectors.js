export const selectCars = (state) => state.cars;
export const selectBrands = (state) => state.cars.brand;
export const selectFilters = (state) => state.cars.filters;
export const selectError = (state) => state.cars.isError;
export const selectCar = (state) => state.cars.car;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectItems = (state) => state.cars.items;
