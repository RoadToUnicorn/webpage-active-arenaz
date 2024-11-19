export type MatchType = {
    imgSrc: string;
    sportType: string;
    slotsFilled: number;
    totalSlots: number;
    matchTime: string;
    matchDate: string;
    arenaName: string;
    arenaPrice: number;
    discount?: boolean;
};

export type ArenaType = {
    imgSrc: string;
    sportType: string;
    arenaLocation: string;
    arenaName: string;
    discount?: boolean;
};
