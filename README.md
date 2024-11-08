# About
This module adds a simple "Pronouns" text box to SWADE player character sheets
in Foundry VTT. That's it!

![Image of SWADE Character Sheet with added pronoun box](./example.png)

# Known Issues
- Closing a character sheet with the pronoun box still selected doesn't save the
  field. You have to click off the pronoun box *then* close the character sheet.
- No localization yet.

# Installation

In Foundry, click "Install Module" then copy the link to the
manifest/module.json:

```
https://raw.githubusercontent.com/ViperZer0/swade-pronouns/main/module.json
```

Enable the module in any world. That's it! You should now see the new 
field appear on player character sheets.

# License 

SWADE Pronouns is licensed under the [GNU GPL v3.0 License](LICENSE).
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, 
or (at your option) any later version.

This program is distributed in the hope that it will be useful, 
but WITHOUT ANY WARRANTY; without even the implied warranty of 
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
See the GNU General Public License for more details.

SWADE Pronouns does not contain with it any assets or resources 
related to the SWADE system but does reference the system and
depends on it. 

# Changelog

## 0.9.1 - 2024-11-06

### Fixed
- Fixed issue where players could only see pronouns for character sheets they
  owned.
