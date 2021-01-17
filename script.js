const penumpang = [];
console.log(penumpang);

// Function untuk menambah penumpang
const tambahPenumpang = (namaPenumpang, penumpang) => {

    // jika angkot kosong
    if (penumpang.length === 0 ) {
        // tambah penumpang di awal array
        penumpang[0] = namaPenumpang;
    }

    // else
    else {

        //Cek apakah ada orang dengan nama yg sama di angkot
        const foundPenumpang = penumpang.find( (orang) => {
            return orang === namaPenumpang;
        } );
    
        // Jika ada nama yg sama beri peringatan
        if(foundPenumpang) {
            console.log(namaPenumpang + " sudah naik angkot.");
            return penumpang;
        } 

        // telusuri seluruh kursi dari awal
        let i = 0;
        // Telusuri apakah di angkot terdapat kursi kosong
        for(i; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if(penumpang[i] === undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                break;
            } 
        }

        // Jika tidak terdapat kursi kosong
        if(penumpang[i] !== namaPenumpang) {
            // Penumpang di tempatkan di kursi paling akhir
            penumpang[penumpang.length] = namaPenumpang; 
        }

    }

    // kembalikan isi array & keluar dari function
    return penumpang;
}


// Function untuk menurunkan penumpang
const hapusPenumpang = (namaPenumpang, penumpang) => {

    // Jika di angkot belum ada penumpang
    if(penumpang.length === 0) {
        //Beri peringatan angkot kosong
        console.log("Angkot sedang kosong.");
    }

    // else
    else {

        // Periksa apakah masih ada penumpang di angkot
        const semuaTurun = penumpang.filter( (orang) => {
            return orang === undefined;
        } );

        // Jika panjang array dari found penumpang yg isinya undefine sama panjang dengan array penumpang
        if(semuaTurun.length === penumpang.length) {
            //Maka penumpang sudah turun semua
            console.log("Angkot sedang kosong.")
            // Mencetak penumpang supaya langsung keluar dari function
            return penumpang;
        }

        // Telusuri apakah terdapat nama orang yang mau turun
        const foundPenumpang = penumpang.find( (orang) => {
            return orang === namaPenumpang;
        } );
    
        // Jika nama yang mau turun tidak ada yg sama dengan penumpang angkot
        if(foundPenumpang === undefined) {
            // Beri peringatan orang yg mau turun tidak ada di angkot
            console.log(namaPenumpang + " tidak ada di angkot.");
            // Mencetak penumpang supaya langsung keluar dari function
            return penumpang;
        } 

        let i = 0;
        // Telusuri apakah terdapat nama penumpang yg sama dengan nama yg ingin turun
        for(i; i < penumpang.length; i++) {
            // Jika ada
            if(penumpang[i] === namaPenumpang) {
                // Maka buat kursinya menjadi kosong atau undefined
                penumpang[i] = undefined;
                break;
            }
        }
    }

    // Mencetak penumpang
    return penumpang;
}

