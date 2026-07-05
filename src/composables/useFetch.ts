import { ref } from "vue";

type FetchMethods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export function useFetch() {
  const data = ref(null);
  const error = ref<Error | null>(null);

  let url = "";
  let payload: unknown = null;
  let method: FetchMethods = "GET";

  const fetchBuilder = {
    get() {
      method = "GET";
      return this;
    },

    post() {
      method = "POST";
      return this;
    },

    put() {
      method = "PUT";
      return this;
    },

    delete() {
      method = "DELETE";
      return this;
    },

    patch() {
      method = "PATCH";
      return this;
    },

    url(path: string) {
      url = path;
      return this;
    },

    payload(info: unknown) {
      payload = info ?? null;
      return this;
    },

    async run() {
      try {
        const options: RequestInit = {
          method: method,
          headers: { "Content-Type": "application/json" },
          body: payload ? JSON.stringify(payload) : null,
        };

        const res = await fetch(import.meta.env.VITE_API_URL + url, options);

        if (!res.ok) throw new Error("Network response was not ok");

        data.value = await res.json();
      } catch (err) {
        error.value = err as Error;
      }
    },
  };

  return { data, error, fetch: fetchBuilder };
}
