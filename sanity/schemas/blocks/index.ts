import { defineArrayMember, defineField } from "sanity";

export const navigationLinks = {
  title: "Navigation",
  name: "navigation_links",
  type: "object",
  fields: [
    defineField({
      title: "Label",
      name: "label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Url",
      name: "url",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
};

export const socialLinks = {
  title: "Social Link",
  name: "socialLink",
  type: "object",
  fields: [
    defineField({
      title: "Label",
      name: "label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Url",
      name: "url",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
};

export const bodyText = [
  defineArrayMember({
    title: "Block",
    type: "block",
    // Styles let you define what blocks can be marked up as. The default
    // set corresponds with HTML tags, but you can set any title or value
    // you want, and decide how you want to deal with it where you want to
    // use your content.
    styles: [
      { title: "Normal", value: "normal" },
      { title: "H1", value: "h1" },
      { title: "H2", value: "h2" },
      { title: "H3", value: "h3" },
      { title: "H4", value: "h4" },
      { title: "Quote", value: "blockquote" },
    ],
    lists: [{ title: "Bullet", value: "bullet" }],
    // Marks let you mark up inline text in the Portable Text Editor
    marks: {
      // Decorators usually describe a single property – e.g. a typographic
      // preference or highlighting
      decorators: [
        { title: "Strong", value: "strong" },
        { title: "Emphasis", value: "em" },
      ],
      // Annotations can be any object structure – e.g. a link or a footnote.
      annotations: [
        {
          title: "URL",
          name: "link",
          type: "object",
          fields: [
            {
              title: "URL",
              name: "href",
              type: "url",
            },
          ],
        },
      ],
    },
  }),
  // You can add additional types here. Note that you can't use
  // primitive types such as 'string' and 'number' in the same array
  // as a block type.
  defineArrayMember({
    type: "image",
    options: { hotspot: false },
    fields: [
      {
        name: "alt",
        type: "string",
        title: "Alternative Text",
      },
    ],
  }),
];

export const seo = {
  title: "Seo information",
  name: "seo",
  type: "object",
  fields: [
    // SEO Content
    defineField({
      type: "string",
      name: "seoTitle",
      title: "SEO Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "string",
      name: "seoDescription",
      title: "SEO Description",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "string",
      name: "seoKeywords",
      title: "SEO Keywords",
    }),
    defineField({
      type: "string",
      name: "seoOGImage",
      title: "SEO OG Image",
    }),
  ],
};
