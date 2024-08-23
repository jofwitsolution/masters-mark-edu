export const eventStyleFormats = [
  {
    title: "Headers",
    items: [
      { title: "heading-1", block: "h1" },
      { title: "heading-2", block: "h2" },
      { title: "heading-3", block: "h3" },
      { title: "heading-4", block: "h4" },
      { title: "heading-5", block: "h5" },
      { title: "heading-6", block: "h6" },
    ],
  },
  {
    title: "Blocks",
    items: [
      { title: "Paragraph", block: "p" },
      {
        title: "div",
        block: "div",
        classes: "wrapper",
        wrapper: true,
      },
      { title: "pre", block: "pre" },
      {
        title: "Row Container",
        block: "div",
        classes: ["row-container"],
      },
      {
        title: "Column Container",
        block: "div",
        classes: ["column-container"],
      },
      {
        title: "300px image",
        block: "div",
        classes: [".default-image-size"],
      },
    ],
  },
];

export const plugins = [
  "advlist",
  "autolink",
  "lists",
  "link",
  "image",
  "charmap",
  "preview",
  "anchor",
  "searchreplace",
  "visualblocks",
  "codesample",
  "fullscreen",
  "insertdatetime",
  "media",
  "table",
];

export const postToolbar = [
  "undo redo | styles | bold italic lineheight | alignleft aligncenter alignright| bullist numlist indent outdent | link image",
];

export const eventToolbar = [
  "undo redo | styles | bold italic lineheight | alignleft aligncenter alignright| bullist numlist indent outdent",
];

export const eventContentStyle =
  ".row-container { display: flex; gap: 32px; flex-wrap: wrap; } .row-container > img { width: 350px; } .column-container { display: flex; gap: 32px; flex-direction: column; } .default-img-size { width: 300px; }";
