import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

test("renders email and city text", () => {
  render(<Contact />);
  const email = screen.getByText("sharmilas@zohomail.in");
  const city = screen.getByText("Chennai, IN");

  expect(email).toBeTruthy();
  expect(city).toBeTruthy();
});

test("renders mail to link for the email", () => {
    render(<Contact />)
  const email = screen.getByRole("link", { name: "sharmilas@zohomail.in" });

  expect(email).toHaveAttribute("href", "mailto:sharmilas@zohomail.in");


});
