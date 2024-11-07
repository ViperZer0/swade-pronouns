/* Detect when a character sheet is loaded and inject the 
 * pronoun box into it.
 */
Hooks.on('renderCharacterSheet', (characterSheet, html, data) => {
    console.log(characterSheet);
    let sheetToInsert = {};
    if (html.is("form.main-grid"))
    {
        sheetToInsert = html;
    }
    else{
        sheetToInsert = html.find("form.main-grid");
    }

    if (sheetToInsert === undefined)
    {
        // This shouldn't happen?
        console.error("SWADE Pronouns | Unable to find character sheet!");
        return;
    }
    /* Add pronouns to SWADE character sheet */
    if (characterSheet.object.flags?.swadePronouns?.pronouns === undefined)
    {
        characterSheet.object.update({'flags.swadePronouns.pronouns': ""});
    }

    /* Only enable changing the input field if this is sheet is editable (i.e
     * belongs to the player) */
    let disabled = false;
    if (sheetToInsert.is("form.editable"))
    {
        disabled = false;
    }
    else if (sheetToInsert.is("form.locked"))
    {
        disabled = true;
    }

    const inputHtml = `<span class="gridcell character-detail pronouns" data-tooltip="Pronouns">
<label class="sr-only">Pronouns</label>
<input type="text" name="pronouns" value="${characterSheet.object.flags.swadePronouns.pronouns}" data-tooltip="Pronouns" placeholder="Pronouns" ${disabled ? "disabled" : ""}>
</span>`

    sheetToInsert.append(inputHtml);

    html.on('change', '.pronouns', (event) => {
        console.log(event.target.value);
        characterSheet.object.update({'flags.swadePronouns.pronouns': event.target.value});
    });
});
