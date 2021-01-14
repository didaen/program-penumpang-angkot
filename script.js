const penumpang = [];
const tambahPenumpang = (namaPenumpang, penumpang) => {
    // jika angkot kosong
    if (penumpang.length === 0) {
        //     tambah penumpang di awal array
        penumpang[0] = namaPenumpang;

        //     kembalikan isi array & keluar dari function
        return penumpang;
    }

    // else



    // else if (penumpang.length !== 0) {
        
    //     // telusuri seluruh kursi dari awal
    //     const temukanUndefinedPertama = penumpang.find( (undifinedPertama) => {
    //         return undifinedPertama === undefined;
    //     });

    //     return penumpang

        // jika ada kursi kosong
    //             tambah penumpang di kursi tersebut
    //             kembalikan isi array & keluar dari function

    // }
    //         jika sudah ada nama yang sama
    //             tampilkan pesan kesalahannya
    //             kembalikan isi array & keluar dari function
    //         jika seluruh kursi terisi
    //             tambah penumpang di akhir Array
    //             kembalikan isi array & keluar dari function
    
}

const cobaArray = [];
cobaArray[0] = "Dida";
cobaArray[1] = "Isna";
cobaArray[2] = undefined;
cobaArray[3] = "Fina";
console.log(cobaArray);

const greet = () => {
    return "Hello, World";
};