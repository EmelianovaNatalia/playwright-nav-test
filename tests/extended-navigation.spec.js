import { test, expect } from '@playwright/test';

test.describe('Extended navigation tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Page titles are correct for all pages', async ({ page }) => {
    // Home page title (используем фактический заголовок)
    await expect(page).toHaveTitle('Home');

    // About page title
    await page.click('a[href="about.html"]');
    await expect(page).toHaveTitle('About');

    // Contact page title
    await page.click('a[href="contact.html"]');
    await expect(page).toHaveTitle('Contact');
  });

  test('All navigation links are present and visible', async ({ page }) => {
    const navLinks = page.locator('nav a');
    await expect(navLinks).toHaveCount(3);
    
    // Более точные селекторы для ссылок навигации
    await expect(page.locator('a[href="index.html"]')).toBeVisible();
    await expect(page.locator('a[href="about.html"]')).toBeVisible();
    await expect(page.locator('a[href="contact.html"]')).toBeVisible();
  });

  test('Navigation structure is correct', async ({ page }) => {
    // Проверяем что навигация находится в nav элементе
    await expect(page.locator('nav')).toBeVisible();
    
    // Проверяем что все ссылки находятся внутри nav
    const linksInNav = page.locator('nav a');
    await expect(linksInNav).toHaveCount(3);
  });
});
// My solution
