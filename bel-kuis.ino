int led1 = 16;    // Pin LED 1 terhubung ke pin 16 / D0
int btn1 = 4;  // Pin tombol 1 terhubung ke pin 4 / D1
int buzz1 = 5; // Pin Buzzer 1 terhubung ke pin 5 / D2
int btn1stt = 0; // Variabel untuk menyimpan status tombol 1

int led2 = 0;    // Pin LED 2 terhubung ke pin 0 / D3
int btn2 = 14;  // Pin tombol 2 terhubung ke pin 14 / D4
int buzz2 = 2; // Pin Buzzer 2 terhubung ke pin 2 / D5
int btn2stt = 0; // Variabel untuk menyimpan status tombol 2

int led3 = 15;    // Pin LED 3 terhubung ke pin 15 / D8
int btn3 = 13;  // Pin tombol 3 terhubung ke pin 13 / D7
int buzz3 = 12; // Pin Buzzer 3 terhubung ke pin 12 / D6
int btn3stt = 0; // Variabel untuk menyimpan status tombol 3

int buzz1stt = 0; // Variabel status buzzer dan LED 1
int buzz2stt = 0; // Variabel status buzzer dan LED 2
int buzz3stt = 0; // Variabel status buzzer dan LED 3

void setup() {
  pinMode(led1, OUTPUT);      // Mengatur pin LED 1 sebagai output
  pinMode(btn1, INPUT_PULLUP);    // Mengatur pin tombol 1 sebagai input
  pinMode(buzz1, OUTPUT); // Pin Buzzer 1 sebagai output

  pinMode(led2, OUTPUT);      // Mengatur pin LED 2 sebagai output
  pinMode(btn2, INPUT_PULLUP);    // Mengatur pin tombol 2 sebagai input
  pinMode(buzz2, OUTPUT); // Pin Buzzer 2 sebagai output

  pinMode(led3, OUTPUT);      // Mengatur pin LED 3 sebagai output
  pinMode(btn3, INPUT_PULLUP);    // Mengatur pin tombol 3 sebagai input
  pinMode(buzz3, OUTPUT); // Pin Buzzer 3 sebagai output
}

void loop() {
  btn1stt = digitalRead(btn1); // Membaca status tombol 1 
  btn2stt = digitalRead(btn2); // Membaca status tombol 2
  btn3stt = digitalRead(btn3); // Membaca status tombol 3
  buzz1stt = 0;   // Mengatur status buzzer dan LED 1 dalam kondisi tidak aktif
  buzz2stt = 0;   // Mengatur status buzzer dan LED 2 dalam kondisi tidak aktif
  buzz3stt = 0;   // Mengatur status buzzer dan LED 3 dalam kondisi tidak aktif

  if (btn1stt == LOW && btn2stt == HIGH && btn3stt == HIGH) {   // Jika tombol 1 ditekan, tombol 2 dan 3 terlepas, adu cepat
    if (buzz1stt == 0 && buzz2stt == 0 && buzz3stt == 0) {      // Jika tidak ada buzzer dan LED yang sedang aktif
      digitalWrite(led1, HIGH);  // LED 1 menyala
      tone(buzz1, 2100);  // Buzzer 1 berbunyi
      buzz1stt = 1;   // Mengatur status Buzzer dan LED 1 sedang aktif
  
      digitalWrite(led2, LOW); // Padamkan LED 2
      noTone(buzz2);           // Buzzer 2 diam
      digitalWrite(led3, LOW); // Padamkan LED 3
      noTone(buzz3);           // Buzzer 3 diam

      delay(2000);             // Buzzer dan LED 1 aktif selama 2 detik 
      digitalWrite(led1, LOW); // Padamkan LED 1
      noTone(buzz1);           // Buzzer 1 diam
      buzz1stt = 0;            // Atur kembali status Buzzer dan LED 1 sedang tidak aktif
    }
  }
  else if (btn1stt == HIGH && btn2stt == LOW && btn3stt == HIGH) {  // Jika tombol 2 di tekan
    if (buzz1stt == 0 && buzz2stt == 0 && buzz3stt == 0) {
      digitalWrite(led2, HIGH);
      tone(buzz2, 2100);
      buzz2stt = 1;

      digitalWrite(led1, LOW);
      noTone(buzz1);
      digitalWrite(led3, LOW);
      noTone(buzz3);
      
      delay(2000);
      digitalWrite(led2, LOW);
      noTone(buzz2);
      buzz2stt = 0;
    }
  }
  else if (btn1stt == HIGH && btn2stt == HIGH && btn3stt == LOW) {  // Jika tombol 3 di tekan
    if (buzz1stt == 0 && buzz2stt == 0 && buzz3stt == 0) {
      digitalWrite(led3, HIGH);
      tone(buzz3, 2100);
      buzz3stt = 1;

      digitalWrite(led1, LOW);
      noTone(buzz1);
      digitalWrite(led2, LOW);
      noTone(buzz2);

      delay(2000);
      digitalWrite(led3, LOW);
      noTone(buzz3);
      buzz3stt = 0;
    }
  }

}
