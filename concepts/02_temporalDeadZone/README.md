# Temporal Dead Zone

Temporal Dead Zone is the period of time during which the `let` and `const` declarations cannot be accessed and are un-reachable. Temporal Dead Zone starts when the code execution enters the block which contains the let or const declaration and continues until the declaration has executed.

## Are `let` and `const` declarations hoisted?

Yes, `let` and `const` declarations are also hoisted but within the block scope but not initialized.