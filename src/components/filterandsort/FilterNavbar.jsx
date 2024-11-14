import {
  ChevronRightIcon,
  FunnelIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaList } from "react-icons/fa";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { Checkbox, InputNumber, TreeSelect } from "antd";
import { DownOutlined } from "@ant-design/icons";
import servicesOptions from "../../../src/json/gcsdata.json";
// import { BookHiveContext } from "../../../context/BookHiveContext";
// import FilterMobile from "./FilterMobile";

const FilterNavbar = ({
  onList,
  onSetList,
  onSelectSortingChange,
  onProjectsPerPageOptions,
  onProjectsPerPage,
  onHandleProjectsPerPageChange,
  onSelectedServices,
  // onCurrentProjects,
  onSetSelectedServices,
}) => {
  // const { searchQuery } = useContext(BookHiveContext);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // const limit = 500;

  // Pass value to component Shop and GridProducts
  const handleSelectSortingChange = (e) => {
    const selectedSortingValue = e.target.value;
    onSelectSortingChange(selectedSortingValue);
  };

  return (
    <div>
      <div>
        <nav>
          <div className="flex flex-col">
            <div className="flex items-baseline sm:justify-end lg:justify-between border-b border-blumine-200 pb-4 sm:mx-4 lg:mx-0">
              <div className="md:flex flex-col sm:hidden justify-center items-center ">
                {/* <Link to="/">
                  {searchQuery && (
                    <div className="flex sm:flex-col md:flex-row flex-start">
                      <h1 className="text-base tracking-tight text-blumine-500 lg:inline-block mx-2">
                        Search Result:{" "}
                      </h1>
                      <h1 className="text-base font-bold sm:mx-2 lg:mx-0 text-blumine-950">
                        {searchQuery}
                      </h1>
                    </div>
                  )}
                </Link> */}
              </div>
              <div className="flex items-center">
                <div className="mx-10">
                  <label
                    data-te-select-label-ref
                    className="mr-4 font-medium text-blumine-500"
                  >
                    Show
                  </label>
                  <select
                    className="cursor-pointer font-semibold focus:outline-none bg-white text-gray-700"
                    value={onProjectsPerPage}
                    onChange={onHandleProjectsPerPageChange}
                  >
                    {onProjectsPerPageOptions.map((option, key) => (
                      <option value={option} key={key}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mr-2 font-medium text-blumine-500">
                    Sort by
                  </label>
                  <select
                    className="cursor-pointer font-semibold focus:outline-none text-gray-700 bg-white"
                    onChange={handleSelectSortingChange}
                  >
                    <option value="bestSeller" selected>
                      Best Seller
                    </option>
                    <option value="highRate">High Rate</option>
                    <option value="newest">Newest</option>
                    <option value="priceHighLow">Price: High to Low </option>
                    <option value="priceLowHigh">Price: Low to High </option>
                  </select>
                </div>
                {/* <div
                  className="inline-flex sm:ml-5 p-2 cursor-pointer"
                  role="group"
                  onClick={() => onSetList(!onList)}
                >
                  {onList ? (
                    <a className=" text-blumine-500 hover:text-blumine-600 ">
                      <span className="sr-only">List View</span>
                      <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  ) : (
                    <a className=" text-blumine-500 hover:text-blumine-600 ">
                      <span className="sr-only">View grid</span>
                      <FaList className="h-5 w-5" aria-hidden="true" />
                    </a>
                  )}
                </div> */}

                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-blumine-500 hover:text-blumine-600 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="sm:flex md:hidden py-4">
              {/* <Link to="/">
                {searchQuery && (
                  <div className="flex">
                    <h1 className="text-base tracking-tight text-blumine-900 lg:inline-block mx-2">
                      Search Result:{" "}
                    </h1>
                    <h1 className="text-base font-bold sm:mx-2 lg:mx-0">
                      {searchQuery}
                    </h1>
                  </div>
                )}
              </Link> */}
            </div>
          </div>
        </nav>
      </div>

      {/* filter mobile */}
      <div>
        {console.log(mobileFiltersOpen)}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4 pb-4 ">
                    <h2 className="text-lg font-semibold text-blumine-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-blumine-500 hover:text-blumine-600"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <Disclosure defaultOpen={true}>
                    {({ open }) => (
                      <>
                        <DisclosureButton className="flex w-full justify-between bg-blumine-500 px-4 py-2 text-left text-sm font-medium text-white hover:bg-blumine-600 focus:outline-none focus-visible:ring focus-visible:ring-blumine-500/75">
                          <span>Category</span>
                          <ChevronRightIcon
                            className={`${
                              open ? "rotate-90 transform" : ""
                            } h-5 w-5 text-blumine-500`}
                          />
                        </DisclosureButton>
                        <Transition
                          enter="transition duration-200 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-200 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <DisclosurePanel className="px-4 pb-2 pt-4 text-sm text-blumine-500">
                            <TreeSelect
                              style={{ width: "100%" }}
                              value={onSelectedServices}
                              dropdownStyle={{
                                maxHeight: 400,
                                overflow: "auto",
                              }}
                              switcherIcon={
                                <DownOutlined className="font-bold" />
                              }
                              treeData={servicesOptions.Services.map(
                                (services) => services.service_name
                              )}
                              placeholder="Select a category"
                              treeCheckable
                              showCheckedStrategy={TreeSelect.SHOW_PARENT}
                              onChange={(value) => onSetSelectedServices(value)}
                            />
                          </DisclosurePanel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                  {/* <Disclosure as="div" defaultOpen={true} className="mt-4">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between bg-blumine-500 px-4 py-2 text-left text-sm font-medium text-white hover:bg-blumine-600 focus:outline-none focus-visible:ring focus-visible:ring-blumine-500/75">
                          <span>Price</span>
                          <ChevronRightIcon
                            className={`${
                              open ? "rotate-90 transform" : ""
                            } h-5 w-5 text-blumine-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="flex mx-4 pb-2 pt-4 text-sm text-blumine-500">
                          <InputNumber
                            min={0}
                            max={limit}
                            defaultValue={onSelectedPriceRange[0]}
                            onChange={handleMinPriceRange}
                          />
                          <span className="m-2">to</span>
                          <InputNumber
                            min={0}
                            max={limit}
                            defaultValue={onSelectedPriceRange[1]}
                            onChange={handleMaxPriceRange}
                          />
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure> */}
                  {/* <Disclosure as="div" defaultOpen={true} className="mt-4">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between bg-blumine-500 px-4 py-2 text-left text-sm font-medium text-white hover:bg-blumine-600 focus:outline-none focus-visible:ring focus-visible:ring-blumine-500/75">
                          <span>Availability</span>
                          <ChevronRightIcon
                            className={`${
                              open ? "rotate-90 transform" : ""
                            } h-5 w-5 text-blumine-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="flex flex-col px-4 pb-2 pt-4 text-sm text-blumine-500">
                          <Checkbox
                            checked={onStockAvailability.available}
                            onChange={() =>
                              onHandleStockAvailabilityChange("available")
                            }
                          >
                            Available
                          </Checkbox>
                          <Checkbox
                            checked={onStockAvailability.emptyStock}
                            onChange={() =>
                              onHandleStockAvailabilityChange("emptyStock")
                            }
                          >
                            Sold Out
                          </Checkbox>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure> */}
                </DialogPanel>
              </Transition.Child>
              {console.log(
                servicesOptions.Services.map(
                  (services) => services.service_name
                )
              )}
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
};

export default FilterNavbar;
