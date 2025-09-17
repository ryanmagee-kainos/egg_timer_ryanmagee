# Implementing the Egg Doneness Feature

## Overview
This feature allows users to select how they want their egg boiled (soft, medium, or hard), and automatically sets the timer duration based on their choice.

## Implementation Steps

1. **UI Design**
   - Add a section with radio buttons or a dropdown for users to select "Soft", "Medium", or "Hard" boiled eggs.
   - Place this selection above or near the timer input fields for visibility.

2. **Logic**
   - Define preset times for each doneness level (e.g., Soft: 4 min, Medium: 7 min, Hard: 10 min).
   - When a user selects a doneness option, automatically update the minutes/seconds input fields with the corresponding time.
   - Allow users to override the preset if they wish.

3. **Integration**
   - Ensure the timer uses the selected or overridden time when started.
   - Optionally, highlight or indicate the selected doneness.

4. **Testing**
   - Test each doneness option to ensure the correct time is set.
   - Test that manual overrides work and the timer functions as expected.

## Example UI (pseudo-code)

```
[ How do you want your egg boiled? ]
( ) Soft (4:00)
( ) Medium (7:00)
( ) Hard (10:00)

[ Minutes: __ ] [ Seconds: __ ]
```

## Notes
- Preset times can be adjusted based on user feedback or regional preferences.
- The feature should not interfere with manual timer entry.
