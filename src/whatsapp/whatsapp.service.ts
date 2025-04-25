import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { Buttons, Client, LocalAuth } from 'whatsapp-web.js';
import * as qrcode from 'qrcode-terminal';
import { PrismaClient } from '@prisma/client';



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
                args: ['--no-sandbox', '--disable-setuid-sandbox'],
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


   
}