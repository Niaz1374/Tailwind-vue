import App from "@/App.vue";

describe("App", () => {
  // Inspect the raw component options
  it("If it has data ✅", () => {
    expect(typeof App.data).toBe("function");
  });
});
