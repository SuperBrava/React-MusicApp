
import { screen, cleanup } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

describe('TodoForm', () => {
    beforeEach(() => {
        render(<App />)
    })

    test("does not change greeting whilst a user enters", async () => {
      const nameInput = screen.getByLabelText('Todo')
      await userEvent.type(nameInput,'Beth')
      expect(nameInput.value).toBe("Beth")
    });

    test("does not change greeting whilst a user enters hello", async () => {
      const nameInput = screen.getByLabelText('Todo')
      const button = screen.getByRole('button');
      const heading = screen.getByRole('heading');
      await userEvent.type(nameInput,'Beth')
      await userEvent.click(button);
      expect(heading.textContent).toBe("Sarah's To do list Beth");
    });

    // test("does not change greeting whilst a user enters input", () => {
    //   const nameInput = screen.getByLabelText('Todo')

    //   userEvent.type(nameInput, "Beth{enter}")
    //   expect(nameInput.value).toBe("")
    // });
})