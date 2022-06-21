
export const get_sections = (state) => {
    return state.store.groceries.map(g => g.section).filter((v, i, a) => a.indexOf(v) === i);
};

export const get_uoms = (state) => {
    return state.store.UOM.map(u => u.name);
};
