const petQueryKey = {
    all: ['Pets'], 
    detail: (petId: string) => [...petQueryKey.all, petId],
}

export default petQueryKey;