import { mockClient } from "./mockClient";
import { client } from "./client";

const useMockApi = import.meta.env.VITE_USE_MOCK_API === "true";

export const api = useMockApi ? mockClient : client;
