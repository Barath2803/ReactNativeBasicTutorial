# About the Tutorial
To master the basics of React Native for iOS and Android Mobile App Development

### Basic Components:
1.
2.
3.
4. [SectionList](https://github.com/Barath2803/ReactNativeBasicTutorial/edit/main/README.md#sectionlist-component)
5. [Custom Component for SectionList](https://github.com/Barath2803/ReactNativeBasicTutorial/edit/main/README.md#custom-component-for-sectionlist)

### SectionList Component:

Basic props:
> KeyExtractor - If the key is not available for the items in the list, then this prop is used to assign unique key for all the items in the List with there index values.

> sections - Which get the while list or data as a input.

> renderItems - To render through all the leaf items in the list or data.

> renderSectionHeader - To render at top of the each section (like title for each section)

<img src="SectionList.png" width="200" />


### Custom Component for SectionList:

Create separate js file for SectionList component and import in main App.js file for more reuseability.
Refer: CustomSectionListApp.js, CustomSectionList.js

<img src="CustomSectionList.png" width="200" />
