const penumpang = [];
const tambahPenumpang = (namaPenumpang, penumpang) => {
    // jika angkot kosong
    if (penumpang.length === 0) {
        //     tambah penumpang di awal array
        penumpang[0] = namaPenumpang;

        //     kembalikan isi array & keluar dari function
        return penumpang;
    }

    console.log(penumpang);
    
    // else
    //     telusuri seluruh kursi dari awal
    //         jika ada kursi kosong
    //             tambah penumpang di kursi tersebut
    //             kembalikan isi array & keluar dari function
    //         jika sudah ada nama yang sama
    //             tampilkan pesan kesalahannya
    //             kembalikan isi array & keluar dari function
    //         jika seluruh kursi terisi
    //             tambah penumpang di akhir Array
    //             kembalikan isi array & keluar dari function

}

const greet = () => {
    return "Hello, World";
};