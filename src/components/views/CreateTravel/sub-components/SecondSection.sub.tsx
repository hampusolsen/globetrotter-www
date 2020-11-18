import { connect, FormikContextType } from "formik";
import React from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TravelFormValues } from "../CreateTravel.view";

type Props = { formik: FormikContextType<TravelFormValues> };

const SecondSection: React.FC = (props) => {
  return (
    <section>
      <div>
        From
        <Datepicker
          selected={(props as Props).formik.values.from_date}
          onChange={(date) =>
            (props as Props).formik.setFieldValue("from_date", date as Date)
          }
        />
      </div>
      <div>
        To
        <Datepicker
          selected={(props as Props).formik.values.to_date}
          onChange={(date) =>
            (props as Props).formik.setFieldValue("to_date", date as Date)
          }
        />
      </div>
    </section>
  );
};

export default connect(SecondSection);
