import { BasePage } from "./basePage";

export class MainPage extends BasePage {
    constructor(page) {
        super(page);
       
    }
    Containers = {
            InventoryContainer: this.page.locator('#inventory_container'),
            HeaderContainer: this.page.locator('#header_container > div.header_secondary_container')
        };

        PrimaryButtons = {
            SideMenuButton: this.page.locator('#react-burger-menu-btn'),
            CartButton: this.page.locator('#shopping_cart_container > a'),
            TwitterRefButton: this.page.locator('#page_wrapper > footer > ul > li.social_twitter > a'),
            LinkedInRefButton: this.page.locator('#page_wrapper > footer > ul > li.social_linkedin > a'),
            FacebookRefButton: this.page.locator('#page_wrapper > footer > ul > li.social_facebook > a')
        }

        BodyContainers = {
            SideMenuBody: this.page.locator('#menu_button_container > div > div.bm-menu-wrap')
        }
        
        ListContainer = {
            ItemContainer: this.Containers.InventoryContainer.locator('ItemContainer'),
            SortContainer: this.Containers.HeaderContainer.locator('#header_container > div.header_secondary_container > div > span > select')
        };
        
        Buttons = {
            AddToCartButton: this.Containers.InventoryContainer.locator('#add-to-cart-sauce-labs-backpack'),
            RemoveFromCartButton: this.Containers.InventoryContainer.locator('#remove-sauce-labs-backpack'),
            sortByNameA2Z: this.Containers.HeaderContainer.locator('#header_container > div.header_secondary_container > div > span > select > option:nth-child(1)'),
            sortByNameZ2A: this.Containers.HeaderContainer.locator('#header_container > div.header_secondary_container > div > span > select > option:nth-child(2)'),
            sortByPriceL2H: this.Containers.HeaderContainer.locator('#header_container > div.header_secondary_container > div > span > select > option:nth-child(3)'),
            sortByPriceH2L: this.Containers.HeaderContainer.locator('#header_container > div.header_secondary_container > div > span > select > option:nth-child(4)'),
            ProductTitleLink: this.Containers.InventoryContainer.locator('#item_4_title_link > div'),
            LogoutButton: this.BodyContainers.SideMenuBody.locator('#logout_sidebar_link'),
            ReadAboutButton: this.BodyContainers.SideMenuBody.locator('#about_sidebar_link'),
            
        };

    get productInfoBox() {
        return this.page.locator('#inventory_item_container > div')
    }
}

