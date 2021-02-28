import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Counter from './Counter'

it('should increase number after clicking the increment button', () => {
    render(<Counter />)
    expect(screen.getByText('0')).toBeInTheDocument()
    const button = screen.getByText('Increment')
    fireEvent.click(button)
    expect(screen.getByText('1')).toBeInTheDocument()
});

it('should decrease number after clicking the decrement button', () => {
    render(<Counter />)
    expect(screen.getByText('0')).toBeInTheDocument()
    const button = screen.getByText('Decrement')
    fireEvent.click(button)
    expect(screen.getByText('-1')).toBeInTheDocument()
});