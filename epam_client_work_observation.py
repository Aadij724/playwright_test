from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=False)
    page = browser.new_page()
    
    # Step 1: Visit the website
    page.goto('https://www.epam.com/')
    page.wait_for_load_state('networkidle')
    
    # Step 2: Navigate to Services
    page.click('text=Services')
    page.wait_for_load_state('networkidle')
    
    # Step 3: Click on "Explore Our Client Work"
    page.click('text=Explore Our Client Work')
    page.wait_for_load_state('networkidle')
    
    # Step 4: Check for "Client Work" text
    is_client_work_visible = page.is_visible('text="Client Work"')
    
    # Step 5: Share results
    if is_client_work_visible:
        print("OBSERVATION COMPLETE: 'Client Work' text is present on the page")
    else:
        print("OBSERVATION COMPLETE: 'Client Work' text is not present on the page")
    
    browser.close()

with sync_playwright() as playwright:
    run(playwright)