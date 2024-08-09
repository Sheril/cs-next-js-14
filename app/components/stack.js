import Contentstack from "contentstack";

const CS_API_KEY = process.env.NEXT_PUBLIC_CS_API_KEY ?? "";
const CS_DELIVERY_TOKEN = process.env.NEXT_PUBLIC_CS_DELIVERY_TOKEN ?? "";
const CS_PREVIEW_TOKEN = process.env.NEXT_PUBLIC_CS_PREVIEW_TOKEN ?? "";
const CS_ENVIRONMENT = process.env.NEXT_PUBLIC_CS_ENVIRONMENT ?? "";

export const Stack = Contentstack.Stack({
  api_key: CS_API_KEY,
  delivery_token: CS_DELIVERY_TOKEN,
  environment: CS_ENVIRONMENT,
  live_preview: {
    enable: true,
    preview_token: CS_PREVIEW_TOKEN,
  },
});
