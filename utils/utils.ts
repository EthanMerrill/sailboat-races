export const monthParse = (month: string): number => {
    switch (month) {
        case 'Jan':
            return 0;
        case 'Feb':
            return 1;
        case 'Mar':
            return 2;
        case 'Apr':
            return 3;
        case 'May':
            return 4;
        case 'Jun':
            return 5;
        case 'Jul':
            return 6;
        case 'Aug':
            return 7;
        case 'Sep':
            return 8;
        case 'Oct':
            return 9;
        case 'Nov':
            return 10;
        case 'Dec':
            return 11;
        default:
            return -1;
    }
}

export const monthString = (month: number): string => {
    switch (month) {
        case 0:
            return 'Jan';
        case 1:
            return 'Feb';
        case 2:
            return 'Mar';
        case 3:
            return 'Apr';
        case 4:
            return 'May';
        case 5:
            return 'Jun';
        case 6:
            return 'Jul';
        case 7:
            return 'Aug';
        case 8:
            return 'Sep';
        case 9:
            return 'Oct';
        case 10:
            return 'Nov';
        case 11:
            return 'Dec';
        default:
            return '';
    }
}