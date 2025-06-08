import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { Buttons, Client, LocalAuth, MessageMedia } from 'whatsapp-web.js';
import * as qrcode from 'qrcode-terminal';
import { Carnet, PrismaClient } from 'generated/prisma';



@Injectable()
export class WhatsappService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.client.initialize();
    }

    private readonly client: Client;
    private readonly logger = new Logger(WhatsappService.name);

    constructor() {
        super()

        this.client = new Client({
            authStrategy: new LocalAuth(),
            puppeteer: {
                args: ['--no-sandbox'],
                headless: true
            },
        });

        this.client.on('qr', (qr) => {
            qrcode.generate(qr, { small: true });
            this.logger.log('Escanea el código QR con WhatsApp.');
        });

        this.client.on('ready', () => {
            this.logger.log('Cliente de WhatsApp listo.');
        });

        this.client.on('message', async (msg) => {

        });
    }


    async sendMessage(message: string, number: string) {
        this.client.sendMessage(`549${number}@c.us`, message)
    }


    async sendCarnet(tel: string, pdfFile: ArrayBuffer) {
        const base64PDF = Buffer.from(pdfFile).toString('base64');
        const media = new MessageMedia(
            'application/pdf',
            base64PDF,
            'carnet.pdf',
        );

        await this.client.sendMessage(`549${tel}@c.us`, media, { caption: "Carnet Prueba 2" })
    }



}