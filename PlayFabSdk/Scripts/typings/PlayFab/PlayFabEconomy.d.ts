declare module PlayFabEconomyModule {
    export interface IPlayFabEconomy {
        settings: PlayFabModule.IPlayFabSettings;
        // Add inventory items.
        // https://docs.microsoft.com/rest/api/playfab/economy/inventory/addinventoryitems
        AddInventoryItems(
            request: PlayFabEconomyModels.AddInventoryItemsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.AddInventoryItemsResponse> | null,
        ): void;
        // Creates a new item in the working catalog using provided metadata.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/createdraftitem
        CreateDraftItem(
            request: PlayFabEconomyModels.CreateDraftItemRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.CreateDraftItemResponse> | null,
        ): void;
        // Creates one or more upload URLs which can be used by the client to upload raw file data.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/createuploadurls
        CreateUploadUrls(
            request: PlayFabEconomyModels.CreateUploadUrlsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.CreateUploadUrlsResponse> | null,
        ): void;
        // Deletes all reviews, helpfulness votes, and ratings submitted by the entity specified.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/deleteentityitemreviews
        DeleteEntityItemReviews(
            request: PlayFabEconomyModels.DeleteEntityItemReviewsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteEntityItemReviewsResponse> | null,
        ): void;
        // Delete an Inventory Collection
        // https://docs.microsoft.com/rest/api/playfab/economy/inventory/deleteinventorycollection
        DeleteInventoryCollection(
            request: PlayFabEconomyModels.DeleteInventoryCollectionRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteInventoryCollectionResponse> | null,
        ): void;
        // Delete inventory items
        // https://docs.microsoft.com/rest/api/playfab/economy/inventory/deleteinventoryitems
        DeleteInventoryItems(
            request: PlayFabEconomyModels.DeleteInventoryItemsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteInventoryItemsResponse> | null,
        ): void;
        // Removes an item from working catalog and all published versions from the public catalog.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/deleteitem
        DeleteItem(
            request: PlayFabEconomyModels.DeleteItemRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteItemResponse> | null,
        ): void;
        // Execute a list of Inventory Operations
        // https://docs.microsoft.com/rest/api/playfab/economy/inventory/executeinventoryoperations
        ExecuteInventoryOperations(
            request: PlayFabEconomyModels.ExecuteInventoryOperationsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.ExecuteInventoryOperationsResponse> | null,
        ): void;
        // Gets the configuration for the catalog.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/getcatalogconfig
        GetCatalogConfig(
            request: PlayFabEconomyModels.GetCatalogConfigRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetCatalogConfigResponse> | null,
        ): void;
        // Retrieves an item from the working catalog. This item represents the current working state of the item.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/getdraftitem
        GetDraftItem(
            request: PlayFabEconomyModels.GetDraftItemRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetDraftItemResponse> | null,
        ): void;
        // Retrieves a paginated list of the items from the draft catalog.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/getdraftitems
        GetDraftItems(
            request: PlayFabEconomyModels.GetDraftItemsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetDraftItemsResponse> | null,
        ): void;
        // Retrieves a paginated list of the items from the draft catalog created by the Entity.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/getentitydraftitems
        GetEntityDraftItems(
            request: PlayFabEconomyModels.GetEntityDraftItemsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetEntityDraftItemsResponse> | null,
        ): void;
        // Gets the submitted review for the specified item by the authenticated entity.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/getentityitemreview
        GetEntityItemReview(
            request: PlayFabEconomyModels.GetEntityItemReviewRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetEntityItemReviewResponse> | null,
        ): void;
        // Get Inventory Collection Ids
        // https://docs.microsoft.com/rest/api/playfab/economy/inventory/getinventorycollectionids
        GetInventoryCollectionIds(
            request: PlayFabEconomyModels.GetInventoryCollectionIdsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetInventoryCollectionIdsResponse> | null,
        ): void;
        // Get current inventory items.
        // https://docs.microsoft.com/rest/api/playfab/economy/inventory/getinventoryitems
        GetInventoryItems(
            request: PlayFabEconomyModels.GetInventoryItemsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetInventoryItemsResponse> | null,
        ): void;
        // Retrieves an item from the public catalog.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitem
        GetItem(
            request: PlayFabEconomyModels.GetItemRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemResponse> | null,
        ): void;
        // Search for a given item and return a set of bundles and stores containing the item
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitemcontainers
        GetItemContainers(
            request: PlayFabEconomyModels.GetItemContainersRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemContainersResponse> | null,
        ): void;
        // Gets the moderation state for an item, including the concern category and string reason.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitemmoderationstate
        GetItemModerationState(
            request: PlayFabEconomyModels.GetItemModerationStateRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemModerationStateResponse> | null,
        ): void;
        // Gets the status of a publish of an item.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitempublishstatus
        GetItemPublishStatus(
            request: PlayFabEconomyModels.GetItemPublishStatusRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemPublishStatusResponse> | null,
        ): void;
        // Get a paginated set of reviews associated with the specified item.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitemreviews
        GetItemReviews(
            request: PlayFabEconomyModels.GetItemReviewsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemReviewsResponse> | null,
        ): void;
        // Get a summary of all reviews associated with the specified item.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitemreviewsummary
        GetItemReviewSummary(
            request: PlayFabEconomyModels.GetItemReviewSummaryRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemReviewSummaryResponse> | null,
        ): void;
        // Retrieves items from the public catalog.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitems
        GetItems(
            request: PlayFabEconomyModels.GetItemsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemsResponse> | null,
        ): void;
        // Gets the access tokens.
        // https://docs.microsoft.com/rest/api/playfab/economy/inventory/getmicrosoftstoreaccesstokens
        GetMicrosoftStoreAccessTokens(
            request: PlayFabEconomyModels.GetMicrosoftStoreAccessTokensRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetMicrosoftStoreAccessTokensResponse> | null,
        ): void;
        // Get transaction history.
        // https://docs.microsoft.com/rest/api/playfab/economy/inventory/gettransactionhistory
        GetTransactionHistory(
            request: PlayFabEconomyModels.GetTransactionHistoryRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetTransactionHistoryResponse> | null,
        ): void;
        // Initiates a publish of an item from the working catalog to the public catalog.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/publishdraftitem
        PublishDraftItem(
            request: PlayFabEconomyModels.PublishDraftItemRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.PublishDraftItemResponse> | null,
        ): void;
        // Purchase an item or bundle
        // https://docs.microsoft.com/rest/api/playfab/economy/inventory/purchaseinventoryitems
        PurchaseInventoryItems(
            request: PlayFabEconomyModels.PurchaseInventoryItemsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.PurchaseInventoryItemsResponse> | null,
        ): void;
        // Redeem items.
        // https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemappleappstoreinventoryitems
        RedeemAppleAppStoreInventoryItems(
            request: PlayFabEconomyModels.RedeemAppleAppStoreInventoryItemsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.RedeemAppleAppStoreInventoryItemsResponse> | null,
        ): void;
        // Redeem items.
        // https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemgoogleplayinventoryitems
        RedeemGooglePlayInventoryItems(
            request: PlayFabEconomyModels.RedeemGooglePlayInventoryItemsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.RedeemGooglePlayInventoryItemsResponse> | null,
        ): void;
        // Redeem items.
        // https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemmicrosoftstoreinventoryitems
        RedeemMicrosoftStoreInventoryItems(
            request: PlayFabEconomyModels.RedeemMicrosoftStoreInventoryItemsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.RedeemMicrosoftStoreInventoryItemsResponse> | null,
        ): void;
        // Redeem items.
        // https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemnintendoeshopinventoryitems
        RedeemNintendoEShopInventoryItems(
            request: PlayFabEconomyModels.RedeemNintendoEShopInventoryItemsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.RedeemNintendoEShopInventoryItemsResponse> | null,
        ): void;
        // Redeem items.
        // https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemplaystationstoreinventoryitems
        RedeemPlayStationStoreInventoryItems(
            request: PlayFabEconomyModels.RedeemPlayStationStoreInventoryItemsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.RedeemPlayStationStoreInventoryItemsResponse> | null,
        ): void;
        // Redeem items.
        // https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemsteaminventoryitems
        RedeemSteamInventoryItems(
            request: PlayFabEconomyModels.RedeemSteamInventoryItemsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.RedeemSteamInventoryItemsResponse> | null,
        ): void;
        // Submit a report for an item, indicating in what way the item is inappropriate.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/reportitem
        ReportItem(
            request: PlayFabEconomyModels.ReportItemRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.ReportItemResponse> | null,
        ): void;
        // Submit a report for a review
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/reportitemreview
        ReportItemReview(
            request: PlayFabEconomyModels.ReportItemReviewRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.ReportItemReviewResponse> | null,
        ): void;
        // Creates or updates a review for the specified item.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/reviewitem
        ReviewItem(
            request: PlayFabEconomyModels.ReviewItemRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.ReviewItemResponse> | null,
        ): void;
        // Executes a search against the public catalog using the provided search parameters and returns a set of paginated
        // results.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/searchitems
        SearchItems(
            request: PlayFabEconomyModels.SearchItemsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SearchItemsResponse> | null,
        ): void;
        // Sets the moderation state for an item, including the concern category and string reason.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/setitemmoderationstate
        SetItemModerationState(
            request: PlayFabEconomyModels.SetItemModerationStateRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SetItemModerationStateResponse> | null,
        ): void;
        // Submit a vote for a review, indicating whether the review was helpful or unhelpful.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/submititemreviewvote
        SubmitItemReviewVote(
            request: PlayFabEconomyModels.SubmitItemReviewVoteRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SubmitItemReviewVoteResponse> | null,
        ): void;
        // Subtract inventory items.
        // https://docs.microsoft.com/rest/api/playfab/economy/inventory/subtractinventoryitems
        SubtractInventoryItems(
            request: PlayFabEconomyModels.SubtractInventoryItemsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SubtractInventoryItemsResponse> | null,
        ): void;
        // Submit a request to takedown one or more reviews.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/takedownitemreviews
        TakedownItemReviews(
            request: PlayFabEconomyModels.TakedownItemReviewsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.TakedownItemReviewsResponse> | null,
        ): void;
        // Transfer inventory items.
        // https://docs.microsoft.com/rest/api/playfab/economy/inventory/transferinventoryitems
        TransferInventoryItems(
            request: PlayFabEconomyModels.TransferInventoryItemsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.TransferInventoryItemsResponse> | null,
        ): void;
        // Updates the configuration for the catalog.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/updatecatalogconfig
        UpdateCatalogConfig(
            request: PlayFabEconomyModels.UpdateCatalogConfigRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.UpdateCatalogConfigResponse> | null,
        ): void;
        // Update the metadata for an item in the working catalog.
        // https://docs.microsoft.com/rest/api/playfab/economy/catalog/updatedraftitem
        UpdateDraftItem(
            request: PlayFabEconomyModels.UpdateDraftItemRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.UpdateDraftItemResponse> | null,
        ): void;
        // Update inventory items
        // https://docs.microsoft.com/rest/api/playfab/economy/inventory/updateinventoryitems
        UpdateInventoryItems(
            request: PlayFabEconomyModels.UpdateInventoryItemsRequest | null,
            callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.UpdateInventoryItemsResponse> | null,
        ): void;


    }
}

declare module PlayFabEconomyModels {
    export interface AddInventoryItemsOperation {
        // The amount to add to the current item amount.
        Amount: number;
        // The inventory item the operation applies to.
        Item?: InventoryItemReference;
        // The values to apply to a stack newly created by this operation.
        NewStackValues?: InitialValues;
    }

    export interface AddInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The amount to add for the current item.
        Amount: number;
        // The id of the entity's collection to perform this action on. (Default="default")
        CollectionId?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // ETags are used for concurrency checking when updating resources.
        ETag?: string;
        // The Idempotency ID for this request.
        IdempotencyId?: string;
        // The inventory item the request applies to.
        Item?: InventoryItemReference;
        // The values to apply to a stack newly created by this request.
        NewStackValues?: InitialValues;
    }

    export interface AddInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon {
        // ETags are used for concurrency checking when updating resources.
        ETag?: string;
        // The idempotency id used in the request.
        IdempotencyId?: string;
        // The ids of transactions that occurred as a result of the request.
        TransactionIds?: string[];
    }

    export interface AlternateId {
        // Type of the alternate ID.
        Type?: string;
        // Value of the alternate ID.
        Value?: string;
    }

    export interface CatalogAlternateId {
        // Type of the alternate ID.
        Type?: string;
        // Value of the alternate ID.
        Value?: string;
    }

    export interface CatalogConfig {
        // A list of player entity keys that will have admin permissions.
        AdminEntities?: EntityKey[];
        // The set of configuration that only applies to catalog items.
        Catalog?: CatalogSpecificConfig;
        // A list of deep link formats.
        DeepLinkFormats?: DeepLinkFormat[];
        // A list of display properties to index.
        DisplayPropertyIndexInfos?: DisplayPropertyIndexInfo[];
        // The set of configuration that only applies to Files.
        File?: FileConfig;
        // The set of configuration that only applies to Images.
        Image?: ImageConfig;
        // Flag defining whether catalog is enabled.
        IsCatalogEnabled: boolean;
        // A list of Platforms that can be applied to catalog items.
        Platforms?: string[];
        // A set of player entity keys that are allowed to review content.
        ReviewerEntities?: EntityKey[];
        // The set of configuration that only applies to user generated contents.
        UserGeneratedContent?: UserGeneratedContentSpecificConfig;
    }

    export interface CatalogItem {
        // The alternate IDs associated with this item.
        AlternateIds?: CatalogAlternateId[];
        // The set of contents associated with this item.
        Contents?: Content[];
        // The client-defined type of the item.
        ContentType?: string;
        // The date and time when this item was created.
        CreationDate?: string;
        // The ID of the creator of this catalog item.
        CreatorEntity?: EntityKey;
        // The set of platform specific deep links for this item.
        DeepLinks?: DeepLink[];
        // A dictionary of localized descriptions. Key is language code and localized string is the value. The neutral locale is
        // required.
        Description?: { [key: string]: string | null };
        // Game specific properties for display purposes. This is an arbitrary JSON blob.
        DisplayProperties?: any;
        // The user provided version of the item for display purposes.
        DisplayVersion?: string;
        // The date of when the item will cease to be available. If not provided then the product will be available indefinitely.
        EndDate?: string;
        // The current ETag value that can be used for optimistic concurrency in the If-None-Match header.
        ETag?: string;
        // The unique ID of the item.
        Id?: string;
        // The images associated with this item. Images can be thumbnails or screenshots.
        Images?: Image[];
        // Indicates if the item is hidden.
        IsHidden?: boolean;
        // The item references associated with this item.
        ItemReferences?: CatalogItemReference[];
        // A dictionary of localized keywords. Key is language code and localized list of keywords is the value.
        Keywords?: { [key: string]: KeywordSet };
        // The date and time this item was last updated.
        LastModifiedDate?: string;
        // The moderation state for this item.
        Moderation?: ModerationState;
        // The platforms supported by this item.
        Platforms?: string[];
        // The base price of this item.
        PriceOptions?: CatalogPriceOptions;
        // Rating summary for this item.
        Rating?: Rating;
        // The date of when the item will be available. If not provided then the product will appear immediately.
        StartDate?: string;
        // Optional details for stores items.
        StoreDetails?: StoreDetails;
        // The list of tags that are associated with this item.
        Tags?: string[];
        // A dictionary of localized titles. Key is language code and localized string is the value. The neutral locale is
        // required.
        Title?: { [key: string]: string | null };
        // The high-level type of the item. The following item types are supported: bundle, catalogItem, currency, store, ugc.
        Type?: string;
    }

    export interface CatalogItemReference {
        // The amount of the catalog item.
        Amount?: number;
        // The unique ID of the catalog item.
        Id?: string;
        // The prices the catalog item can be purchased for.
        PriceOptions?: CatalogPriceOptions;
    }

    export interface CatalogPrice {
        // The amounts of the catalog item price.
        Amounts?: CatalogPriceAmount[];
    }

    export interface CatalogPriceAmount {
        // The amount of the price.
        Amount: number;
        // The Item Id of the price.
        ItemId?: string;
    }

    export interface CatalogPriceAmountOverride {
        // The exact value that should be utilized in the override.
        FixedValue?: number;
        // The id of the item this override should utilize.
        ItemId?: string;
        // The multiplier that will be applied to the base Catalog value to determine what value should be utilized in the
        // override.
        Multiplier?: number;
    }

    export interface CatalogPriceOptions {
        // Prices of the catalog item.
        Prices?: CatalogPrice[];
    }

    export interface CatalogPriceOptionsOverride {
        // The prices utilized in the override.
        Prices?: CatalogPriceOverride[];
    }

    export interface CatalogPriceOverride {
        // The currency amounts utilized in the override for a singular price.
        Amounts?: CatalogPriceAmountOverride[];
    }

    export interface CatalogSpecificConfig {
        // The set of content types that will be used for validation.
        ContentTypes?: string[];
        // The set of tags that will be used for validation.
        Tags?: string[];
    }

    type ConcernCategory = "None"

        | "OffensiveContent"
        | "ChildExploitation"
        | "MalwareOrVirus"
        | "PrivacyConcerns"
        | "MisleadingApp"
        | "PoorPerformance"
        | "ReviewResponse"
        | "SpamAdvertising"
        | "Profanity";

    export interface Content {
        // The content unique ID.
        Id?: string;
        // The maximum client version that this content is compatible with.
        MaxClientVersion?: string;
        // The minimum client version that this content is compatible with.
        MinClientVersion?: string;
        // The list of tags that are associated with this content.
        Tags?: string[];
        // The client-defined type of the content.
        Type?: string;
        // The Azure CDN URL for retrieval of the catalog item binary content.
        Url?: string;
    }

    export interface ContentFeed {}

    type CountryCode = "AF"

        | "AX"
        | "AL"
        | "DZ"
        | "AS"
        | "AD"
        | "AO"
        | "AI"
        | "AQ"
        | "AG"
        | "AR"
        | "AM"
        | "AW"
        | "AU"
        | "AT"
        | "AZ"
        | "BS"
        | "BH"
        | "BD"
        | "BB"
        | "BY"
        | "BE"
        | "BZ"
        | "BJ"
        | "BM"
        | "BT"
        | "BO"
        | "BQ"
        | "BA"
        | "BW"
        | "BV"
        | "BR"
        | "IO"
        | "BN"
        | "BG"
        | "BF"
        | "BI"
        | "KH"
        | "CM"
        | "CA"
        | "CV"
        | "KY"
        | "CF"
        | "TD"
        | "CL"
        | "CN"
        | "CX"
        | "CC"
        | "CO"
        | "KM"
        | "CG"
        | "CD"
        | "CK"
        | "CR"
        | "CI"
        | "HR"
        | "CU"
        | "CW"
        | "CY"
        | "CZ"
        | "DK"
        | "DJ"
        | "DM"
        | "DO"
        | "EC"
        | "EG"
        | "SV"
        | "GQ"
        | "ER"
        | "EE"
        | "ET"
        | "FK"
        | "FO"
        | "FJ"
        | "FI"
        | "FR"
        | "GF"
        | "PF"
        | "TF"
        | "GA"
        | "GM"
        | "GE"
        | "DE"
        | "GH"
        | "GI"
        | "GR"
        | "GL"
        | "GD"
        | "GP"
        | "GU"
        | "GT"
        | "GG"
        | "GN"
        | "GW"
        | "GY"
        | "HT"
        | "HM"
        | "VA"
        | "HN"
        | "HK"
        | "HU"
        | "IS"
        | "IN"
        | "ID"
        | "IR"
        | "IQ"
        | "IE"
        | "IM"
        | "IL"
        | "IT"
        | "JM"
        | "JP"
        | "JE"
        | "JO"
        | "KZ"
        | "KE"
        | "KI"
        | "KP"
        | "KR"
        | "KW"
        | "KG"
        | "LA"
        | "LV"
        | "LB"
        | "LS"
        | "LR"
        | "LY"
        | "LI"
        | "LT"
        | "LU"
        | "MO"
        | "MK"
        | "MG"
        | "MW"
        | "MY"
        | "MV"
        | "ML"
        | "MT"
        | "MH"
        | "MQ"
        | "MR"
        | "MU"
        | "YT"
        | "MX"
        | "FM"
        | "MD"
        | "MC"
        | "MN"
        | "ME"
        | "MS"
        | "MA"
        | "MZ"
        | "MM"
        | "NA"
        | "NR"
        | "NP"
        | "NL"
        | "NC"
        | "NZ"
        | "NI"
        | "NE"
        | "NG"
        | "NU"
        | "NF"
        | "MP"
        | "NO"
        | "OM"
        | "PK"
        | "PW"
        | "PS"
        | "PA"
        | "PG"
        | "PY"
        | "PE"
        | "PH"
        | "PN"
        | "PL"
        | "PT"
        | "PR"
        | "QA"
        | "RE"
        | "RO"
        | "RU"
        | "RW"
        | "BL"
        | "SH"
        | "KN"
        | "LC"
        | "MF"
        | "PM"
        | "VC"
        | "WS"
        | "SM"
        | "ST"
        | "SA"
        | "SN"
        | "RS"
        | "SC"
        | "SL"
        | "SG"
        | "SX"
        | "SK"
        | "SI"
        | "SB"
        | "SO"
        | "ZA"
        | "GS"
        | "SS"
        | "ES"
        | "LK"
        | "SD"
        | "SR"
        | "SJ"
        | "SZ"
        | "SE"
        | "CH"
        | "SY"
        | "TW"
        | "TJ"
        | "TZ"
        | "TH"
        | "TL"
        | "TG"
        | "TK"
        | "TO"
        | "TT"
        | "TN"
        | "TR"
        | "TM"
        | "TC"
        | "TV"
        | "UG"
        | "UA"
        | "AE"
        | "GB"
        | "US"
        | "UM"
        | "UY"
        | "UZ"
        | "VU"
        | "VE"
        | "VN"
        | "VG"
        | "VI"
        | "WF"
        | "EH"
        | "YE"
        | "ZM"
        | "ZW";

    export interface CreateDraftItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // Metadata describing the new catalog item to be created.
        Item?: CatalogItem;
        // Whether the item should be published immediately.
        Publish: boolean;
    }

    export interface CreateDraftItemResponse extends PlayFabModule.IPlayFabResultCommon {
        // Updated metadata describing the catalog item just created.
        Item?: CatalogItem;
    }

    export interface CreateUploadUrlsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // Description of the files to be uploaded by the client.
        Files?: UploadInfo[];
    }

    export interface CreateUploadUrlsResponse extends PlayFabModule.IPlayFabResultCommon {
        // List of URLs metadata for the files to be uploaded by the client.
        UploadUrls?: UploadUrlMetadata[];
    }

    export interface DeepLink {
        // Target platform for this deep link.
        Platform?: string;
        // The deep link for this platform.
        Url?: string;
    }

    export interface DeepLinkFormat {
        // The format of the deep link to return. The format should contain '{id}' to represent where the item ID should be placed.
        Format?: string;
        // The target platform for the deep link.
        Platform?: string;
    }

    export interface DeleteEntityItemReviewsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
    }

    export interface DeleteEntityItemReviewsResponse extends PlayFabModule.IPlayFabResultCommon {}

    export interface DeleteInventoryCollectionRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The inventory collection id the request applies to.
        CollectionId?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity the request is about. Set to the caller by default.
        Entity?: EntityKey;
        // ETags are used for concurrency checking when updating resources.
        ETag?: string;
    }

    export interface DeleteInventoryCollectionResponse extends PlayFabModule.IPlayFabResultCommon {}

    export interface DeleteInventoryItemsOperation {
        // The inventory item the operation applies to.
        Item?: InventoryItemReference;
    }

    export interface DeleteInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The id of the entity's collection to perform this action on. (Default="default")
        CollectionId?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // ETags are used for concurrency checking when updating resources.
        ETag?: string;
        // The Idempotency ID for this request.
        IdempotencyId?: string;
        // The inventory item the request applies to.
        Item?: InventoryItemReference;
    }

    export interface DeleteInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon {
        // ETags are used for concurrency checking when updating resources.
        ETag?: string;
        // The idempotency id used in the request.
        IdempotencyId?: string;
        // The ids of transactions that occurred as a result of the request.
        TransactionIds?: string[];
    }

    export interface DeleteItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An alternate ID associated with this item.
        AlternateId?: CatalogAlternateId;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // The unique ID of the item.
        Id?: string;
    }

    export interface DeleteItemResponse extends PlayFabModule.IPlayFabResultCommon {}

    export interface DisplayPropertyIndexInfo {
        // The property name in the 'DisplayProperties' property to be indexed.
        Name?: string;
        // The type of the property to be indexed.
        Type?: string;
    }

    type DisplayPropertyType = "None"

        | "QueryDateTime"
        | "QueryDouble"
        | "QueryString"
        | "SearchString";

    export interface EntityKey {
        // Unique ID of the entity.
        Id: string;
        // Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types
        Type?: string;
    }

    export interface ExecuteInventoryOperationsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The id of the entity's collection to perform this action on. (Default="default")
        CollectionId?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // ETags are used for concurrency checking when updating resources.
        ETag?: string;
        // The Idempotency ID for this request.
        IdempotencyId?: string;
        // The operations to run transactionally. The operations will be executed in-order sequentially and will succeed or fail as
        // a batch.
        Operations?: InventoryOperation[];
    }

    export interface ExecuteInventoryOperationsResponse extends PlayFabModule.IPlayFabResultCommon {
        // ETags are used for concurrency checking when updating resources.
        ETag?: string;
        // The idempotency id used in the request.
        IdempotencyId?: string;
        // The ids of the transactions that occurred as a result of the request.
        TransactionIds?: string[];
    }

    export interface FileConfig {
        // The set of content types that will be used for validation.
        ContentTypes?: string[];
        // The set of tags that will be used for validation.
        Tags?: string[];
    }

    export interface FilterOptions {
        // The OData filter utilized. Mutually exclusive with 'IncludeAllItems'.
        Filter?: string;
        // The flag that overrides the filter and allows for returning all catalog items. Mutually exclusive with 'Filter'.
        IncludeAllItems?: boolean;
    }

    export interface GetCatalogConfigRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
    }

    export interface GetCatalogConfigResponse extends PlayFabModule.IPlayFabResultCommon {
        // The catalog configuration.
        Config?: CatalogConfig;
    }

    export interface GetDraftItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An alternate ID associated with this item.
        AlternateId?: CatalogAlternateId;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // The unique ID of the item.
        Id?: string;
    }

    export interface GetDraftItemResponse extends PlayFabModule.IPlayFabResultCommon {
        // Full metadata of the catalog item requested.
        Item?: CatalogItem;
    }

    export interface GetDraftItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // List of item alternate IDs.
        AlternateIds?: CatalogAlternateId[];
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // List of Item Ids.
        Ids?: string[];
    }

    export interface GetDraftItemsResponse extends PlayFabModule.IPlayFabResultCommon {
        // An opaque token used to retrieve the next page of items, if any are available.
        ContinuationToken?: string;
        // A set of items created by the entity.
        Items?: CatalogItem[];
    }

    export interface GetEntityDraftItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An opaque token used to retrieve the next page of items created by the caller, if any are available. Should be null on
        // initial request.
        ContinuationToken?: string;
        // Number of items to retrieve. Maximum page size is 10.
        Count: number;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // OData Filter to specify ItemType.
        Filter?: string;
    }

    export interface GetEntityDraftItemsResponse extends PlayFabModule.IPlayFabResultCommon {
        // An opaque token used to retrieve the next page of items, if any are available.
        ContinuationToken?: string;
        // A set of items created by the entity.
        Items?: CatalogItem[];
    }

    export interface GetEntityItemReviewRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An alternate ID associated with this item.
        AlternateId?: CatalogAlternateId;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // The unique ID of the item.
        Id?: string;
    }

    export interface GetEntityItemReviewResponse extends PlayFabModule.IPlayFabResultCommon {
        // The review the entity submitted for the requested item.
        Review?: Review;
    }

    export interface GetInventoryCollectionIdsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An opaque token used to retrieve the next page of collection ids, if any are available.
        ContinuationToken?: string;
        // Number of items to retrieve. (Default = 10)
        Count: number;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity the request is about. Set to the caller by default.
        Entity?: EntityKey;
    }

    export interface GetInventoryCollectionIdsResponse extends PlayFabModule.IPlayFabResultCommon {
        // The requested inventory collection ids.
        CollectionIds?: string[];
        // An opaque token used to retrieve the next page of collection ids, if any are available.
        ContinuationToken?: string;
    }

    export interface GetInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The id of the entity's collection to perform this action on. (Default="default")
        CollectionId?: string;
        // An opaque token used to retrieve the next page of items in the inventory, if any are available. Should be null on
        // initial request.
        ContinuationToken?: string;
        // Number of items to retrieve. Maximum page size is 50. (Default=10)
        Count: number;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // The filters to limit what is returned to the client.
        Filter?: string;
    }

    export interface GetInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon {
        // An opaque token used to retrieve the next page of items, if any are available.
        ContinuationToken?: string;
        // ETags are used for concurrency checking when updating resources.
        ETag?: string;
        // The requested inventory items.
        Items?: InventoryItem[];
    }

    export interface GetItemContainersRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An alternate ID associated with this item.
        AlternateId?: CatalogAlternateId;
        // An opaque token used to retrieve the next page of items in the inventory, if any are available. Should be null on
        // initial request.
        ContinuationToken?: string;
        // Number of items to retrieve. Maximum page size is 25.
        Count: number;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // The unique ID of the item.
        Id?: string;
    }

    export interface GetItemContainersResponse extends PlayFabModule.IPlayFabResultCommon {
        // List of Bundles and Stores containing the requested items.
        Containers?: CatalogItem[];
        // An opaque token used to retrieve the next page of items, if any are available.
        ContinuationToken?: string;
    }

    export interface GetItemModerationStateRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An alternate ID associated with this item.
        AlternateId?: CatalogAlternateId;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The unique ID of the item.
        Id?: string;
    }

    export interface GetItemModerationStateResponse extends PlayFabModule.IPlayFabResultCommon {
        // The current moderation state for the requested item.
        State?: ModerationState;
    }

    export interface GetItemPublishStatusRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An alternate ID associated with this item.
        AlternateId?: CatalogAlternateId;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // The unique ID of the item.
        Id?: string;
    }

    export interface GetItemPublishStatusResponse extends PlayFabModule.IPlayFabResultCommon {
        // High level status of the published item.
        Result?: string;
        // Descriptive message about the current status of the publish.
        StatusMessage?: string;
    }

    export interface GetItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An alternate ID associated with this item.
        AlternateId?: CatalogAlternateId;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // The unique ID of the item.
        Id?: string;
    }

    export interface GetItemResponse extends PlayFabModule.IPlayFabResultCommon {
        // The item result.
        Item?: CatalogItem;
    }

    export interface GetItemReviewsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An alternate ID associated with this item.
        AlternateId?: CatalogAlternateId;
        // An opaque token used to retrieve the next page of items, if any are available.
        ContinuationToken?: string;
        // Number of items to retrieve. Maximum page size is 200. If not specified, defaults to 10.
        Count: number;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The unique ID of the item.
        Id?: string;
        // An OData orderBy used to order the results of the query.
        OrderBy?: string;
    }

    export interface GetItemReviewsResponse extends PlayFabModule.IPlayFabResultCommon {
        // An opaque token used to retrieve the next page of items, if any are available.
        ContinuationToken?: string;
        // The paginated set of results.
        Reviews?: Review[];
    }

    export interface GetItemReviewSummaryRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An alternate ID associated with this item.
        AlternateId?: CatalogAlternateId;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The unique ID of the item.
        Id?: string;
    }

    export interface GetItemReviewSummaryResponse extends PlayFabModule.IPlayFabResultCommon {
        // The least favorable review for this item.
        LeastFavorableReview?: Review;
        // The most favorable review for this item.
        MostFavorableReview?: Review;
        // The summary of ratings associated with this item.
        Rating?: Rating;
        // The total number of reviews associated with this item.
        ReviewsCount: number;
    }

    export interface GetItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // List of item alternate IDs.
        AlternateIds?: CatalogAlternateId[];
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // List of Item Ids.
        Ids?: string[];
    }

    export interface GetItemsResponse extends PlayFabModule.IPlayFabResultCommon {
        // Metadata of set of items.
        Items?: CatalogItem[];
    }

    export interface GetMicrosoftStoreAccessTokensRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
    }

    export interface GetMicrosoftStoreAccessTokensResponse extends PlayFabModule.IPlayFabResultCommon {
        // The collections access token for calling https://onestore.microsoft.com/b2b/keys/create/collections to obtain a
        // CollectionsIdKey for the user
        CollectionsAccessToken?: string;
        // The date the collections access token expires
        CollectionsAccessTokenExpirationDate: string;
    }

    export interface GetTransactionHistoryRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The id of the entity's collection to perform this action on. (Default="default")
        CollectionId?: string;
        // An opaque token used to retrieve the next page of items, if any are available. Should be null on initial request.
        ContinuationToken?: string;
        // Number of items to retrieve. (Default = 10)
        Count: number;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // An OData filter used to refine the query.
        Filter?: string;
    }

    export interface GetTransactionHistoryResponse extends PlayFabModule.IPlayFabResultCommon {
        // An opaque token used to retrieve the next page of items, if any are available. Should be null on initial request.
        ContinuationToken?: string;
        // The requested inventory transactions.
        Transactions?: Transaction[];
    }

    export interface GooglePlayProductPurchase {
        // The Product ID (SKU) of the InApp product purchased from the Google Play store.
        ProductId?: string;
        // The token provided to the player's device when the product was purchased
        Token?: string;
    }

    type HelpfulnessVote = "None"

        | "UnHelpful"
        | "Helpful";

    export interface Image {
        // The image unique ID.
        Id?: string;
        // The client-defined tag associated with this image.
        Tag?: string;
        // The client-defined type of this image.
        Type?: string;
        // The URL for retrieval of the image.
        Url?: string;
    }

    export interface ImageConfig {
        // The set of tags that will be used for validation.
        Tags?: string[];
    }

    export interface InitialValues {
        // Game specific properties for display purposes.
        DisplayProperties?: any;
    }

    export interface InventoryItem {
        // The amount of the item.
        Amount: number;
        // Game specific properties for display purposes. This is an arbitrary JSON blob.
        DisplayProperties?: any;
        // The id of the item. This should correspond to the item id in the catalog.
        Id?: string;
        // The stack id of the item.
        StackId?: string;
        // The type of the item. This should correspond to the item type in the catalog.
        Type?: string;
    }

    export interface InventoryItemReference {
        // The inventory item alternate id the request applies to.
        AlternateId?: AlternateId;
        // The inventory item id the request applies to.
        Id?: string;
        // The inventory stack id the request should redeem to. (Default="default")
        StackId?: string;
    }

    export interface InventoryOperation {
        // The add operation.
        Add?: AddInventoryItemsOperation;
        // The delete operation.
        Delete?: DeleteInventoryItemsOperation;
        // The purchase operation.
        Purchase?: PurchaseInventoryItemsOperation;
        // The subtract operation.
        Subtract?: SubtractInventoryItemsOperation;
        // The transfer operation.
        Transfer?: TransferInventoryItemsOperation;
        // The update operation.
        Update?: UpdateInventoryItemsOperation;
    }

    export interface KeywordSet {
        // A list of localized keywords.
        Values?: string[];
    }

    export interface ModerationState {
        // The date and time this moderation state was last updated.
        LastModifiedDate?: string;
        // The current stated reason for the associated item being moderated.
        Reason?: string;
        // The current moderation status for the associated item.
        Status?: string;
    }

    type ModerationStatus = "Unknown"

        | "AwaitingModeration"
        | "Approved"
        | "Rejected";

    export interface PayoutDetails {}

    export interface PublishDraftItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An alternate ID associated with this item.
        AlternateId?: CatalogAlternateId;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // ETag of the catalog item to published from the working catalog to the public catalog. Used for optimistic concurrency.
        // If the provided ETag does not match the ETag in the current working catalog, the request will be rejected. If not
        // provided, the current version of the document in the working catalog will be published.
        ETag?: string;
        // The unique ID of the item.
        Id?: string;
    }

    export interface PublishDraftItemResponse extends PlayFabModule.IPlayFabResultCommon {}

    type PublishResult = "Unknown"

        | "Pending"
        | "Succeeded"
        | "Failed"
        | "Canceled";

    export interface PurchaseInventoryItemsOperation {
        // The amount to purchase.
        Amount: number;
        // Indicates whether stacks reduced to an amount of 0 during the operation should be deleted from the inventory. (Default =
        // false)
        DeleteEmptyStacks: boolean;
        // The inventory item the operation applies to.
        Item?: InventoryItemReference;
        // The values to apply to a stack newly created by this operation.
        NewStackValues?: InitialValues;
        // The per-item price the item is expected to be purchased at. This must match a value configured in the Catalog or
        // specified Store.
        PriceAmounts?: PurchasePriceAmount[];
        // The id of the Store to purchase the item from.
        StoreId?: string;
    }

    export interface PurchaseInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The amount to purchase.
        Amount: number;
        // The id of the entity's collection to perform this action on. (Default="default")
        CollectionId?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // Indicates whether stacks reduced to an amount of 0 during the request should be deleted from the inventory.
        // (Default=false)
        DeleteEmptyStacks: boolean;
        // The entity to perform this action on.
        Entity?: EntityKey;
        // ETags are used for concurrency checking when updating resources.
        ETag?: string;
        // The Idempotency ID for this request.
        IdempotencyId?: string;
        // The inventory item the request applies to.
        Item?: InventoryItemReference;
        // The values to apply to a stack newly created by this request.
        NewStackValues?: InitialValues;
        // The per-item price the item is expected to be purchased at. This must match a value configured in the Catalog or
        // specified Store.
        PriceAmounts?: PurchasePriceAmount[];
        // The id of the Store to purchase the item from.
        StoreId?: string;
    }

    export interface PurchaseInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon {
        // ETags are used for concurrency checking when updating resources.
        ETag?: string;
        // The idempotency id used in the request.
        IdempotencyId?: string;
        // The ids of transactions that occurred as a result of the request.
        TransactionIds?: string[];
    }

    export interface PurchaseOverride {}

    export interface PurchasePriceAmount {
        // The amount of the inventory item to use in the purchase .
        Amount: number;
        // The inventory item id to use in the purchase .
        ItemId?: string;
        // The inventory stack id the to use in the purchase. Set to "default" by default
        StackId?: string;
    }

    export interface Rating {
        // The average rating for this item.
        Average?: number;
        // The total count of 1 star ratings for this item.
        Count1Star?: number;
        // The total count of 2 star ratings for this item.
        Count2Star?: number;
        // The total count of 3 star ratings for this item.
        Count3Star?: number;
        // The total count of 4 star ratings for this item.
        Count4Star?: number;
        // The total count of 5 star ratings for this item.
        Count5Star?: number;
        // The total count of ratings for this item.
        TotalCount?: number;
    }

    export interface RedeemAppleAppStoreInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The id of the entity's collection to perform this action on. (Default="default")
        CollectionId?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // The receipt provided by the Apple marketplace upon successful purchase.
        Receipt?: string;
    }

    export interface RedeemAppleAppStoreInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon {
        // The list of failed redemptions from the external marketplace.
        Failed?: RedemptionFailure[];
        // The list of successful redemptions from the external marketplace.
        Succeeded?: RedemptionSuccess[];
        // The Transaction IDs associated with the inventory modifications
        TransactionIds?: string[];
    }

    export interface RedeemGooglePlayInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The id of the entity's collection to perform this action on. (Default="default")
        CollectionId?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // The list of purchases to redeem
        Purchases?: GooglePlayProductPurchase[];
    }

    export interface RedeemGooglePlayInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon {
        // The list of failed redemptions from the external marketplace.
        Failed?: RedemptionFailure[];
        // The list of successful redemptions from the external marketplace.
        Succeeded?: RedemptionSuccess[];
        // The Transaction IDs associated with the inventory modifications
        TransactionIds?: string[];
    }

    export interface RedeemMicrosoftStoreInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The id of the entity's collection to perform this action on. (Default="default")
        CollectionId?: string;
        // The OneStore Collections Id Key used for AAD authentication.
        CollectionsIdKey?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // Xbox Token used for delegated business partner authentication.
        XboxToken?: string;
    }

    export interface RedeemMicrosoftStoreInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon {
        // The list of failed redemptions from the external marketplace.
        Failed?: RedemptionFailure[];
        // The list of successful redemptions from the external marketplace.
        Succeeded?: RedemptionSuccess[];
        // The Transaction IDs associated with the inventory modifications
        TransactionIds?: string[];
    }

    export interface RedeemNintendoEShopInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The id of the entity's collection to perform this action on. (Default="default")
        CollectionId?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // The Nintendo provided token authorizing redemption
        NintendoServiceAccountIdToken?: string;
    }

    export interface RedeemNintendoEShopInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon {
        // The list of failed redemptions from the external marketplace.
        Failed?: RedemptionFailure[];
        // The list of successful redemptions from the external marketplace.
        Succeeded?: RedemptionSuccess[];
        // The Transaction IDs associated with the inventory modifications
        TransactionIds?: string[];
    }

    export interface RedeemPlayStationStoreInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Authorization code provided by the PlayStation OAuth provider.
        AuthorizationCode?: string;
        // The id of the entity's collection to perform this action on. (Default="default")
        CollectionId?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // Optional Service Label to pass into the request.
        ServiceLabel?: string;
    }

    export interface RedeemPlayStationStoreInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon {
        // The list of failed redemptions from the external marketplace.
        Failed?: RedemptionFailure[];
        // The list of successful redemptions from the external marketplace.
        Succeeded?: RedemptionSuccess[];
        // The Transaction IDs associated with the inventory modifications
        TransactionIds?: string[];
    }

    export interface RedeemSteamInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The id of the entity's collection to perform this action on. (Default="default")
        CollectionId?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
    }

    export interface RedeemSteamInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon {
        // The list of failed redemptions from the external marketplace.
        Failed?: RedemptionFailure[];
        // The list of successful redemptions from the external marketplace.
        Succeeded?: RedemptionSuccess[];
        // The Transaction IDs associated with the inventory modifications
        TransactionIds?: string[];
    }

    export interface RedemptionFailure {
        // The marketplace failure code.
        FailureCode?: string;
        // The marketplace error details explaining why the offer failed to redeem.
        FailureDetails?: string;
        // The transaction id in the external marketplace.
        MarketplaceTransactionId?: string;
        // The ID of the offer being redeemed.
        OfferId?: string;
    }

    export interface RedemptionSuccess {
        // The transaction id in the external marketplace.
        MarketplaceTransactionId?: string;
        // The ID of the offer being redeemed.
        OfferId?: string;
        // The timestamp for when the redeem was completed.
        SuccessTimestamp: string;
    }

    export interface ReportItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An alternate ID associated with this item.
        AlternateId?: CatalogAlternateId;
        // Category of concern for this report.
        ConcernCategory?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // The unique ID of the item.
        Id?: string;
        // The string reason for this report.
        Reason?: string;
    }

    export interface ReportItemResponse extends PlayFabModule.IPlayFabResultCommon {}

    export interface ReportItemReviewRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An alternate ID of the item associated with the review.
        AlternateId?: CatalogAlternateId;
        // The reason this review is being reported.
        ConcernCategory?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // The string ID of the item associated with the review.
        ItemId?: string;
        // The string reason for this report.
        Reason?: string;
        // The ID of the review to submit a report for.
        ReviewId?: string;
    }

    export interface ReportItemReviewResponse extends PlayFabModule.IPlayFabResultCommon {}

    export interface Review {
        // The number of negative helpfulness votes for this review.
        HelpfulNegative: number;
        // The number of positive helpfulness votes for this review.
        HelpfulPositive: number;
        // Indicates whether the review author has the item installed.
        IsInstalled: boolean;
        // The ID of the item being reviewed.
        ItemId?: string;
        // The version of the item being reviewed.
        ItemVersion?: string;
        // The locale for which this review was submitted in.
        Locale?: string;
        // Star rating associated with this review.
        Rating: number;
        // The ID of the author of the review.
        ReviewerEntity?: EntityKey;
        // Deprecated. Use ReviewerEntity instead. This property will be removed in a future release.
        ReviewerId?: string;
        // The ID of the review.
        ReviewId?: string;
        // The full text of this review.
        ReviewText?: string;
        // The date and time this review was last submitted.
        Submitted: string;
        // The title of this review.
        Title?: string;
    }

    export interface ReviewItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An alternate ID associated with this item.
        AlternateId?: CatalogAlternateId;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // The unique ID of the item.
        Id?: string;
        // The review to submit.
        Review?: Review;
    }

    export interface ReviewItemResponse extends PlayFabModule.IPlayFabResultCommon {}

    export interface ReviewTakedown {
        // An alternate ID associated with this item.
        AlternateId?: CatalogAlternateId;
        // The ID of the item associated with the review to take down.
        ItemId?: string;
        // The ID of the review to take down.
        ReviewId?: string;
    }

    export interface ScanResult {
        // The URL of the item which failed the scan.
        Url?: string;
    }

    export interface SearchItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An opaque token used to retrieve the next page of items, if any are available.
        ContinuationToken?: string;
        // Number of items to retrieve. Maximum page size is 50. Default value is 10.
        Count: number;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // An OData filter used to refine the search query.
        Filter?: string;
        // An OData orderBy used to order the results of the search query.
        OrderBy?: string;
        // The text to search for.
        Search?: string;
        // An OData select query option used to augment the search results. If not defined, the default search result metadata will
        // be returned.
        Select?: string;
        // The store to restrict the search request to.
        Store?: StoreReference;
    }

    export interface SearchItemsResponse extends PlayFabModule.IPlayFabResultCommon {
        // An opaque token used to retrieve the next page of items, if any are available.
        ContinuationToken?: string;
        // The paginated set of results for the search query.
        Items?: CatalogItem[];
    }

    export interface SetItemModerationStateRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An alternate ID associated with this item.
        AlternateId?: CatalogAlternateId;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The unique ID of the item.
        Id?: string;
        // The reason for the moderation state change for the associated item.
        Reason?: string;
        // The status to set for the associated item.
        Status?: string;
    }

    export interface SetItemModerationStateResponse extends PlayFabModule.IPlayFabResultCommon {}

    export interface StoreDetails {
        // The options for the filter in filter-based stores. These options are mutually exclusive with item references.
        FilterOptions?: FilterOptions;
        // The global prices utilized in the store. These options are mutually exclusive with price options in item references.
        PriceOptionsOverride?: CatalogPriceOptionsOverride;
    }

    export interface StoreReference {
        // An alternate ID of the store.
        AlternateId?: CatalogAlternateId;
        // The unique ID of the store.
        Id?: string;
    }

    export interface SubmitItemReviewVoteRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An alternate ID of the item associated with the review.
        AlternateId?: CatalogAlternateId;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // The string ID of the item associated with the review.
        ItemId?: string;
        // The ID of the review to submit a helpfulness vote for.
        ReviewId?: string;
        // The helpfulness vote of the review.
        Vote?: string;
    }

    export interface SubmitItemReviewVoteResponse extends PlayFabModule.IPlayFabResultCommon {}

    export interface SubscriptionDetails {
        // The length of time that the subscription will last in seconds.
        DurationInSeconds: number;
    }

    export interface SubtractInventoryItemsOperation {
        // The amount to subtract from the current item amount.
        Amount: number;
        // Indicates whether stacks reduced to an amount of 0 during the request should be deleted from the inventory. (Default =
        // false).
        DeleteEmptyStacks: boolean;
        // The inventory item the operation applies to.
        Item?: InventoryItemReference;
    }

    export interface SubtractInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The amount to add for the current item.
        Amount: number;
        // The id of the entity's collection to perform this action on. (Default="default")
        CollectionId?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // Indicates whether stacks reduced to an amount of 0 during the request should be deleted from the inventory.
        // (Default=false)
        DeleteEmptyStacks: boolean;
        // The entity to perform this action on.
        Entity?: EntityKey;
        // ETags are used for concurrency checking when updating resources.
        ETag?: string;
        // The Idempotency ID for this request.
        IdempotencyId?: string;
        // The inventory item the request applies to.
        Item?: InventoryItemReference;
    }

    export interface SubtractInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon {
        // ETags are used for concurrency checking when updating resources.
        ETag?: string;
        // The idempotency id used in the request.
        IdempotencyId?: string;
        // The ids of transactions that occurred as a result of the request.
        TransactionIds?: string[];
    }

    export interface TakedownItemReviewsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The set of reviews to take down.
        Reviews?: ReviewTakedown[];
    }

    export interface TakedownItemReviewsResponse extends PlayFabModule.IPlayFabResultCommon {}

    export interface Transaction {
        // The API call that caused this transaction.
        ApiName?: string;
        // The type of item that the the operation occurred on.
        ItemType?: string;
        // The operations that occurred.
        Operations?: TransactionOperation[];
        // The type of operation that was run.
        OperationType?: string;
        // Additional details about the transaction. Null if it was not a purchase operation.
        PurchaseDetails?: TransactionPurchaseDetails;
        // Additional details about the transaction. Null if it was not a redeem operation.
        RedeemDetails?: TransactionRedeemDetails;
        // The time this transaction occurred in UTC.
        Timestamp: string;
        // The id of the transaction. This should be treated like an opaque token.
        TransactionId?: string;
        // Additional details about the transaction. Null if it was not a transfer operation.
        TransferDetails?: TransactionTransferDetails;
    }

    export interface TransactionOperation {
        // The amount of items in this transaction.
        Amount?: number;
        // The item id of the items in this transaction.
        ItemId?: string;
        // The type of item that the operation occurred on.
        ItemType?: string;
        // The stack id of the items in this transaction.
        StackId?: string;
        // The type of the operation that occurred.
        Type?: string;
    }

    export interface TransactionPurchaseDetails {
        // The id of the Store the item was purchased from or null.
        StoreId?: string;
    }

    export interface TransactionRedeemDetails {
        // The marketplace that the offer is being redeemed from.
        Marketplace?: string;
        // The transaction Id returned from the marketplace.
        MarketplaceTransactionId?: string;
        // The offer Id of the item being redeemed.
        OfferId?: string;
    }

    export interface TransactionTransferDetails {
        // The collection id the items were transferred from or null if it was the current collection.
        GivingCollectionId?: string;
        // The entity the items were transferred from or null if it was the current entity.
        GivingEntity?: EntityKey;
        // The collection id the items were transferred to or null if it was the current collection.
        ReceivingCollectionId?: string;
        // The entity the items were transferred to or null if it was the current entity.
        ReceivingEntity?: EntityKey;
        // The id of the transfer that occurred.
        TransferId?: string;
    }

    export interface TransferInventoryItemsOperation {
        // The amount to transfer.
        Amount: number;
        // Indicates whether stacks reduced to an amount of 0 during the operation should be deleted from the inventory. (Default =
        // false)
        DeleteEmptyStacks: boolean;
        // The inventory item the operation is transferring from.
        GivingItem?: InventoryItemReference;
        // The values to apply to a stack newly created by this operation.
        NewStackValues?: InitialValues;
        // The inventory item the operation is transferring to.
        ReceivingItem?: InventoryItemReference;
    }

    export interface TransferInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The amount to transfer .
        Amount: number;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // Indicates whether stacks reduced to an amount of 0 during the request should be deleted from the inventory. (Default =
        // false)
        DeleteEmptyStacks: boolean;
        // The inventory collection id the request is transferring from. (Default="default")
        GivingCollectionId?: string;
        // The entity the request is transferring from. Set to the caller by default.
        GivingEntity?: EntityKey;
        // ETags are used for concurrency checking when updating resources (before transferring from).
        GivingETag?: string;
        // The inventory item the request is transferring from.
        GivingItem?: InventoryItemReference;
        // The idempotency id for the request.
        IdempotencyId?: string;
        // The values to apply to a stack newly created by this request.
        NewStackValues?: InitialValues;
        // The inventory collection id the request is transferring to. (Default="default")
        ReceivingCollectionId?: string;
        // The entity the request is transferring to. Set to the caller by default.
        ReceivingEntity?: EntityKey;
        // The inventory item the request is transferring to.
        ReceivingItem?: InventoryItemReference;
    }

    export interface TransferInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon {
        // ETags are used for concurrency checking when updating resources (after transferring from).
        GivingETag?: string;
        // The ids of transactions that occurred as a result of the request's giving action.
        GivingTransactionIds?: string[];
        // The idempotency id for the request.
        IdempotencyId?: string;
        // The ids of transactions that occurred as a result of the request's receiving action.
        ReceivingTransactionIds?: string[];
    }

    export interface UpdateCatalogConfigRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The updated catalog configuration.
        Config?: CatalogConfig;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
    }

    export interface UpdateCatalogConfigResponse extends PlayFabModule.IPlayFabResultCommon {}

    export interface UpdateDraftItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // Updated metadata describing the catalog item to be updated.
        Item?: CatalogItem;
        // Whether the item should be published immediately.
        Publish: boolean;
    }

    export interface UpdateDraftItemResponse extends PlayFabModule.IPlayFabResultCommon {
        // Updated metadata describing the catalog item just updated.
        Item?: CatalogItem;
    }

    export interface UpdateInventoryItemsOperation {
        // The inventory item to update with the specified values.
        Item?: InventoryItem;
    }

    export interface UpdateInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The id of the entity's collection to perform this action on. (Default="default")
        CollectionId?: string;
        // The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.).
        CustomTags?: { [key: string]: string | null };
        // The entity to perform this action on.
        Entity?: EntityKey;
        // ETags are used for concurrency checking when updating resources.
        ETag?: string;
        // The Idempotency ID for this request.
        IdempotencyId?: string;
        // The inventory item to update with the specified values.
        Item?: InventoryItem;
    }

    export interface UpdateInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon {
        // ETags are used for concurrency checking when updating resources.
        ETag?: string;
        // The idempotency id used in the request.
        IdempotencyId?: string;
        // The ids of transactions that occurred as a result of the request.
        TransactionIds?: string[];
    }

    export interface UploadInfo {
        // Name of the file to be uploaded.
        FileName?: string;
    }

    export interface UploadUrlMetadata {
        // Name of the file for which this upload URL was requested.
        FileName?: string;
        // Unique ID for the binary content to be uploaded to the target URL.
        Id?: string;
        // URL for the binary content to be uploaded to.
        Url?: string;
    }

    export interface UserGeneratedContentSpecificConfig {
        // The set of content types that will be used for validation.
        ContentTypes?: string[];
        // The set of tags that will be used for validation.
        Tags?: string[];
    }

}
