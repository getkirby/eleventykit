import { $fetch } from "ofetch";

export default async function () {
  const api = "https://kql.getkirby.com/api/query";

  const response = await $fetch(api, {
    method: "post",
    body: {
      query: "page('notes').children.sortBy('date', 'desc')",
      select: {
        title: true,
        text: "page.text.toBlocks.toHtml",
        slug: true,
        date: "page.date.toDate('d.m.Y')",
      },
    },
  });

  return response.result;
}
