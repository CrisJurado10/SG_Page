import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer Component Integration', () => {
  it('renders the brand name correctly in the logo section', () => {
    render(<Footer />);
    
    // Find the link containing the brand text "SG SynerGy"
    // This resolves the "multiple elements" error by being specific with the role
    const logoLink = screen.getByRole('link', { name: /SG SynerGy/i });
    expect(logoLink).toBeInTheDocument();
  });

  it('contains the correct mailto link for contact', () => {
    render(<Footer />);
    // Find the email link by its accessible name
    const emailLink = screen.getByRole('link', { name: /hola@sgsynergy\.com/i });
    
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:hola@sgsynergy.com');
  });

  it('renders all three social media links', () => {
    render(<Footer />);
    // Verify that social media links with aria-label attributes exist
    expect(screen.getByLabelText(/LinkedIn/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Twitter/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/GitHub/i)).toBeInTheDocument();
  });
});
