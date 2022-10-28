export default {
  name: "testimonials",
  type: "document",
  title: "Testimonials",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "company",
      type: "string",
      title: "Company",
    },
    {
      name: "imgurl",
      type: "image",
      title: "Imgurl",
      options: {
        hotspot: true,
      },
    },
    {
      name: "feedback",
      type: "string",
      title: "Feedback",
    },
  ],
};
