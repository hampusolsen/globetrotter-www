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
    from_date: "from_date",
    to_date: "to_date"
  },
  schema: yup.object({
    from_date: yup.date().required("Required field."),
    to_date: yup
      .date()
      .required("Required field.")
      .test(
        "later than from",
        "Date must be after start date.",
        function compareDates(toDate) {
          if (!toDate) return true;

          const fromDate = this.resolve(yup.ref("from_date")) as Date;
          if (toDate < fromDate) return false;

          return true;
        }
      )
  })
};

const steps = [firstStep, secondStep];

export default steps;
