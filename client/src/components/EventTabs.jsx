import { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Textarea,
  Input,
  Switch,
} from "@material-tailwind/react";

export function EventTabs({ formik }) {
  const [activeTab, setActiveTab] = useState("Ticket");
  const [isPaid, setIspaid] = useState(true);
  const [isPromotion, setIsPromotion] = useState(true);

  const handleChangePaid = (e) => {
    setIspaid(e.target.checked);
    if (!isPaid) {
      formik.setFieldValue("ticketPrice", 0);
    }
  };

  const handleChangePromotion = (e) => {
    setIsPromotion(e.target.checked);
    if (!isPromotion) {
      formik.setFieldValue("ticketStartDate", "");
      formik.setFieldValue("ticketEndDate", "");
      formik.setFieldValue("discount", 0);
      formik.setFieldValue("quota", 0);
    }
  };

  return (
    <Tabs value={activeTab} className="mt-16">
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        <Tab
          value={"Ticket"}
          onClick={() => setActiveTab("Ticket")}
          className={` w-64 ${activeTab === "Ticket" ? "text-gray-900" : ""}`}
        >
          {"Ticket Category"}
        </Tab>
        <Tab
          value={"Desciption"}
          onClick={() => setActiveTab("Desciption")}
          className={` w-64 ${
            activeTab === "Desciption" ? "text-gray-900" : ""
          }`}
        >
          {"Event Desciption"}
        </Tab>
      </TabsHeader>
      <TabsBody className="mt-8">
        <TabPanel value={"Ticket"}>
          <div className=" flex flex-col gap-y-10">
            <Input
              variant="static"
              label="Number of Tickets"
              type="number"
              min={0}
              max={1000}
              name="ticketQuantity"
              value={formik.values.ticketQuantity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.ticketQuantity && formik.touched.ticketQuantity && (
              <p className=" font-normal text-red-300">
                {formik.errors.ticketQuantity}
              </p>
            )}

            <div className="flex items-center justify-between">
              <span
                className=" font-normal tracking-wide text-gray-800 antialiased
                "
              >
                Paid Ticket
              </span>
              <Switch
                checked={isPaid}
                onChange={handleChangePaid}
                color="orange"
                ripple={false}
              />
            </div>
            {isPaid && (
              <Input
                variant="static"
                label="Price"
                name="ticketPrice"
                disabled={false}
                value={formik.values.ticketPrice}
                onChange={formik.handleChange}
                type="number"
                min={10000}
                max={100000000000}
              />
            )}

            <div className=" flex items-center justify-between">
              <span className="font-normal tracking-wide text-gray-800 antialiased">
                Promotion
              </span>
              <Switch
                checked={isPromotion}
                onChange={handleChangePromotion}
                color="orange"
                ripple={false}
              />
            </div>
            {isPromotion ? (
              <>
                <Input
                  onChange={formik.handleChange}
                  name="promotionStartDate"
                  value={formik.values.promotionStartDate}
                  label="Start Date"
                  size="lg"
                  variant="static"
                  type="date"
                />
                <Input
                  onChange={formik.handleChange}
                  name="promotionEndDate"
                  value={formik.values.promotionEndDate}
                  label="End Date"
                  size="lg"
                  variant="static"
                  type="date"
                />
                <Input
                  variant="static"
                  label="Discount"
                  type="number"
                  name="discount"
                  value={formik.values.discount}
                  onChange={formik.handleChange}
                  min="0"
                  max="1000"
                />
                <Input
                  variant="static"
                  label="Quota"
                  type="number"
                  name="quota"
                  value={formik.values.quota}
                  onChange={formik.handleChange}
                  min="0"
                  max="1000"
                />
              </>
            ) : null}
          </div>
        </TabPanel>
        <TabPanel value={"Desciption"}>
          <Textarea
            rows={8}
            placeholder="Event Desciption"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}
