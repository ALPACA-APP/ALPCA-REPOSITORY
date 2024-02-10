    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
    org 100h

start:
    ld hl, message
    call print_string

    ret

print_string:
    ld a, (hl)
    or a
    ret z
    call print_char
    inc hl
    jp print_string

print_char:
    ld c, 2
    ld b, 0
    ld de, 1
    ld hl, message_buffer
    add hl, de
    ld (hl), a
    ld a, 9
    rst 0x10
    ret

message:
    db "Hello, World!", 0

message_buffer:
    db 0

    end
    
