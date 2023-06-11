import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import UserImage from "components/UserImage";

test("renders the image", () => {
  // Render the UserImage component
  const { getByAltText } = render(<UserImage />);
  
  // Find the image element by its alt text
  const image = getByAltText("user");
  
  // Assert that the image is rendered
  expect(image).toBeInTheDocument();
});
