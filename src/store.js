export class Store {
    public db: IDBDatabase;

    constructor() {
        if(typeof(window) === "undefined") return;

        const request = indexedDB.open("ntp", 1);

        request.onsuccess = (event: any) => {
            console.log("Success creating/accessing IndexedDB database");
            this.db = request.result;

            this.db.onerror = (event) => {
                console.log("Error creating/accessing IndexedDB database");
            };
            
            this.db.createObjectStore("asset-cache");
        }
    }

    generateId() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    add(database: string, payload: { id?: string, data: any }) {
        if(!payload.id) payload.id = this.generateId();

        return new Promise((resolve, reject) => {
            const t = this.db.transaction([database], "readwrite");

            const a = t.objectStore(database).put(payload.data, payload.id);

            a.onsuccess = (e: any) => {
                resolve(payload.id)
            }

            a.onerror = (e: any) => {
                reject(false);
            }
        })
    }

    get(database: string, id: string) {
        return new Promise((resolve, reject) => {
            const t = this.db.transaction([database], "readwrite");

            const a = t.objectStore(database).get(id);

            a.onsuccess = (e: any) => {
                resolve(e.target.result)
            }

            a.onerror = (e: any) => {
                reject(false);
            }
        })
    }
}