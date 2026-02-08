// Dartboard number segment order clockwise from 20... "as const" makes the array read only.
export const BOARD_ORDER = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5] as const;

// allows only 1..20 to be passed as a segment
export type SegmentNumber = typeof BOARD_ORDER[number];


// return a group of 3 numbers cw based on the target, eg. 20 target = [5, 20, 1] or 3 target = [17, 3, 19]
export function getGroup(target: SegmentNumber): readonly [SegmentNumber, SegmentNumber, SegmentNumber] {
    //locate index of target number
    const idx = BOARD_ORDER.indexOf(target);

    //last valid index is 19
    const lastIndex = BOARD_ORDER.length - 1;

    // Wrap logic to pair 20 with 5 in the array
    const ccwIdx = idx === 0 ? lastIndex : idx - 1;
    const cwIdx = idx === lastIndex ? 0 : idx + 1;

    //return the group
    return [BOARD_ORDER[ccwIdx], target, BOARD_ORDER[cwIdx]] as const;
}

