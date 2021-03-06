"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneroController = void 0;
const common_1 = require("@nestjs/common");
const genero_service_1 = require("./genero.service");
const create_genero_dto_1 = require("./dto/create-genero.dto");
const update_genero_dto_1 = require("./dto/update-genero.dto");
const swagger_1 = require("@nestjs/swagger");
let GeneroController = class GeneroController {
    constructor(GeneroService) {
        this.GeneroService = GeneroService;
    }
    findAll() {
        return this.GeneroService.findAll();
    }
    findOne(id) {
        return this.GeneroService.findOne(id);
    }
    Create(CreatGeneroDto) {
        return this.GeneroService.Create(CreatGeneroDto);
    }
    update(id, dto) {
        return this.GeneroService.update(id, dto);
    }
    delete(id) {
        return this.GeneroService.delete(id);
    }
};
__decorate([
    (0, swagger_1.ApiTags)('genero'),
    (0, swagger_1.ApiOperation)({
        summary: 'Listar todas os generos ',
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GeneroController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiTags)('genero'),
    (0, swagger_1.ApiOperation)({
        summary: 'Listar um genero  pelo seu ID',
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GeneroController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiTags)('genero'),
    (0, swagger_1.ApiOperation)({
        summary: 'Criar um genero ',
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_genero_dto_1.CreatGeneroDto]),
    __metadata("design:returntype", Promise)
], GeneroController.prototype, "Create", null);
__decorate([
    (0, swagger_1.ApiTags)('genero'),
    (0, swagger_1.ApiOperation)({
        summary: 'Atualizar um genero pelo seu ID',
    }),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_genero_dto_1.UpdateGeneroDto]),
    __metadata("design:returntype", Promise)
], GeneroController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiTags)('genero'),
    (0, swagger_1.ApiOperation)({
        summary: 'Deletar uma genero pelo seu ID',
    }),
    (0, common_1.Delete)(":id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GeneroController.prototype, "delete", null);
GeneroController = __decorate([
    (0, common_1.Controller)('genero'),
    __metadata("design:paramtypes", [genero_service_1.GeneroService])
], GeneroController);
exports.GeneroController = GeneroController;
//# sourceMappingURL=genero.controller.js.map