type DateInfo = {
    day: number;
    dayWeek: string;
    month: string;
    year: number;
};

export const getDate = (): DateInfo => {
    const date = new Date();
    const day = date.getDate();
    const dayWeek = date.toLocaleString("en-US", { weekday: "long" });
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    return { day, dayWeek, month, year };
}