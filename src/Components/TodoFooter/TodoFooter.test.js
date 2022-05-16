import {render, screen} from "@testing-library/react"
import TodoFooter from "./TodoFooter"

test('render TodoFooter', ()=>{
    render(<TodoFooter todoLength={5} /)
    const containerElement = screen.getByTestId('todo-footer-element')
    expect(containerElement).toBeInTheDocument()
}) 