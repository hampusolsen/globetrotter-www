import * as yup from "yup";

const firstStep = {
  title: "Tell us about it!",
  fields: {
    title: "title",
    description: "description"
  },
  schema: yup.object({
    title: yup.string().required().min(3).max(32).label("Title"),
    description: yup.string().notRequired().max(400).label("Description")
  })
};

const secondStep = {
  title: "Cool, how long?",
  fields: {
    fromDate: "fromDate",
    toDate: "toDate"
  },
  schema: yup.object({
    fromDate: yup.date().required("Required field."),
    toDate: yup
      .date()
      .required("Required field.")
      .test(
        "later than from",
        "Date must be after start date.",
        function compareDates(toDate) {
          if (!toDate) return true;

          const fromDate = this.resolve(yup.ref("fromDate")) as Date;
          if (toDate < fromDate) return false;

          return true;
        }
      )
  })
};

const steps = [firstStep, secondStep];

export default steps;
